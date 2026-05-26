import { prisma } from '@/lib/prisma';
import { LeadsTable } from './LeadsTable';

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <LeadsTable leads={leads} />;
}
