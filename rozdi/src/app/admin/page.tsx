export const runtime = "edge";
import { prisma } from '@/lib/prisma';
import { LeadsChart } from '@/components/admin/LeadsChart';

export default async function AdminDashboard() {
  const [totalLeads, totalProjects, totalTeam] = await Promise.all([
    prisma.lead.count(),
    prisma.project.count(),
    prisma.teamMember.count(),
  ]);

  // Aggregate leads for the past 7 days
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const recentLeads = await prisma.lead.findMany({
    where: { createdAt: { gte: sevenDaysAgo } },
    select: { createdAt: true },
  });

  const leadsByDay: Record<string, number> = {};
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    leadsByDay[dateStr] = 0;
  }

  recentLeads.forEach((lead: { createdAt: Date }) => {
    const dateStr = lead.createdAt.toISOString().split('T')[0];
    if (leadsByDay[dateStr] !== undefined) {
      leadsByDay[dateStr]++;
    }
  });

  const chartData = Object.keys(leadsByDay).map(date => ({
    date: date.slice(5), // MM-DD
    count: leadsByDay[date],
  }));

  const newThisWeek = chartData.reduce((sum, item) => sum + item.count, 0);

  const stats = [
    { label: 'Total Leads', value: totalLeads },
    { label: 'New This Week', value: newThisWeek },
    { label: 'Projects', value: totalProjects },
    { label: 'Team Members', value: totalTeam },
  ];

  return (
    <div className="w-full">
      <h1 className="text-[28px] font-bold text-[var(--color-charcoal)] mb-8">Analytics Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-[var(--color-border)] p-6 flex flex-col">
            <span className="text-[13px] text-[#888] uppercase tracking-[0.05em] font-semibold mb-2">{stat.label}</span>
            <span className="text-[36px] font-bold text-[var(--color-charcoal)] leading-none">{stat.value}</span>
          </div>
        ))}
      </div>

      <LeadsChart data={chartData} />
    </div>
  );
}
