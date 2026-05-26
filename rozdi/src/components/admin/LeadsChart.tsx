'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function LeadsChart({ data }: { data: { date: string, count: number }[] }) {
  return (
    <div className="h-[300px] w-full mt-8 bg-white border border-[var(--color-border)] p-6">
      <h2 className="text-[16px] font-semibold text-[var(--color-charcoal)] mb-6">Leads (Last 7 Days)</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#888' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: '#888' }} axisLine={false} tickLine={false} allowDecimals={false} />
          <Tooltip 
            cursor={{ fill: '#F9F9F9' }} 
            contentStyle={{ borderRadius: '0px', border: '1px solid #E5E7EB', boxShadow: 'none' }}
          />
          <Bar dataKey="count" fill="#1A1A1A" radius={0} barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
