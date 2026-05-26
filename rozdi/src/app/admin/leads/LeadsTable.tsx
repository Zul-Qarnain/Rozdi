'use client';
import React, { useState } from 'react';
import { Lead } from '@prisma/client';
import { updateLeadStatus } from './actions';

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  function exportCSV() {
    const headers = ['Name', 'Company', 'Email', 'Scope', 'Status', 'Date', 'Message'];
    const rows = leads.map(l => [
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
            <tr className="bg-[var(--color-canvas)] border-b border-[var(--color-border)]">
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Name</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Company</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Email</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Scope</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Status</th>
              <th className="px-4 py-3 text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666]">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <React.Fragment key={lead.id}>
                <tr 
                  className={`border-b border-[var(--color-border)] cursor-pointer hover:bg-[var(--color-cream)] transition-colors ${expandedId === lead.id ? 'bg-[var(--color-cream)]' : ''}`}
                  onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                >
                  <td className="px-4 py-4 text-[14px] text-[var(--color-charcoal)] font-medium">{lead.fullName}</td>
                  <td className="px-4 py-4 text-[14px] text-[#444748]">{lead.company}</td>
                  <td className="px-4 py-4 text-[14px] text-[#444748]">{lead.corporateEmail}</td>
                  <td className="px-4 py-4 text-[14px] text-[#444748]">{lead.projectScope}</td>
                  <td className="px-4 py-4" onClick={(e) => e.stopPropagation()}>
                    <select 
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="border border-[var(--color-border)] bg-white text-[13px] py-1 px-2 focus:outline-none focus:border-[var(--color-charcoal)]"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="converted">Converted</option>
                      <option value="lost">Lost</option>
                    </select>
                  </td>
                  <td className="px-4 py-4 text-[14px] text-[#444748]">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
                {expandedId === lead.id && (
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-canvas)]">
                    <td colSpan={6} className="px-4 py-6">
                      <div className="text-[13px] font-semibold text-[#666] uppercase tracking-[0.05em] mb-2">Message</div>
                      <p className="text-[15px] text-[var(--color-charcoal)] max-w-[800px] whitespace-pre-wrap">
                        {lead.message || 'No message provided.'}
                      </p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-[#888]">No leads found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
