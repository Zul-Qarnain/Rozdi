'use client';

import React, { useMemo, useState } from 'react';
import { Lead } from '@prisma/client';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { updateLeadStatus } from './actions';

const columnHelper = createColumnHelper<Lead>();

export function LeadsTable({ leads: initialLeads }: { leads: Lead[] }) {
  const [data, setData] = useState(() => [...initialLeads]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const columns = useMemo(() => [
    columnHelper.accessor('fullName', {
      header: 'Name',
      cell: info => <span className="font-medium text-[var(--color-charcoal)]">{info.getValue()}</span>,
    }),
    columnHelper.accessor('company', {
      header: 'Company',
      cell: info => <span className="text-[#444748]">{info.getValue()}</span>,
    }),
    columnHelper.accessor('corporateEmail', {
      header: 'Email',
      cell: info => <span className="text-[#444748]">{info.getValue()}</span>,
    }),
    columnHelper.accessor('projectScope', {
      header: 'Scope',
      cell: info => <span className="text-[#444748]">{info.getValue()}</span>,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: info => (
        <select 
          value={info.getValue()}
          onChange={async (e) => {
            const newStatus = e.target.value;
            const id = info.row.original.id;
            // Update local state first for instant feedback
            setData(prev => prev.map(item => item.id === id ? { ...item, status: newStatus as any } : item));
            await updateLeadStatus(id, newStatus);
          }}
          className="border border-[var(--color-border)] bg-white text-[13px] py-1 px-2 focus:outline-none focus:border-[var(--color-charcoal)]"
          onClick={(e) => e.stopPropagation()}
        >
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="converted">Converted</option>
          <option value="lost">Lost</option>
        </select>
      ),
    }),
    columnHelper.accessor('createdAt', {
      header: 'Date',
      cell: info => <span className="text-[#444748]">{new Date(info.getValue()).toLocaleDateString()}</span>,
    }),
  ], []);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  function exportCSV() {
    const headers = ['Name', 'Company', 'Email', 'Scope', 'Status', 'Date', 'Message'];
    const rows = data.map(l => [
      `"${l.fullName}"`,
      `"${l.company}"`,
      `"${l.corporateEmail}"`,
      `"${l.projectScope}"`,
      `"${l.status}"`,
      `"${new Date(l.createdAt).toLocaleDateString()}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);
    
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'leads.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[28px] font-bold text-[var(--color-charcoal)]">Lead Management</h1>
        <button 
          onClick={exportCSV}
          className="border border-[var(--color-charcoal)] text-[var(--color-charcoal)] bg-white px-4 py-2 font-medium text-[14px] hover:bg-[var(--color-cream)] transition-colors"
        >
          Export CSV
        </button>
      </div>

      <div className="bg-white border border-[var(--color-border)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
                {headerGroup.headers.map(header => (
                  <th 
                    key={header.id} 
                    className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] cursor-pointer hover:text-[var(--color-charcoal)]"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: ' ↑',
                        desc: ' ↓',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <React.Fragment key={row.id}>
                <tr 
                  className={`border-b border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-cream)] transition-colors ${expandedId === row.original.id ? 'bg-[var(--color-cream)]' : ''}`}
                  onClick={() => setExpandedId(expandedId === row.original.id ? null : row.original.id)}
                >
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-4 text-[14px]">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
                {expandedId === row.original.id && (
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-canvas)]">
                    <td colSpan={columns.length} className="px-4 py-6">
                      <div className="text-[13px] font-semibold text-[#666] uppercase tracking-[0.05em] mb-2">Message</div>
                      <p className="text-[15px] text-[var(--color-charcoal)] max-w-[800px] whitespace-pre-wrap">
                        {row.original.message || 'No message provided.'}
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-[#888]">No leads found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
