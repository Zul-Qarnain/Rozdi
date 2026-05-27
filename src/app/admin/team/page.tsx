export const dynamic = "force-dynamic";
import { prisma } from '@/lib/prisma';
import { TeamTable } from './TeamTable';

export default async function TeamPage() {
  const members = await prisma.teamMember.findMany({
    orderBy: { displayOrder: 'asc' }
  });

  return <TeamTable members={members} />;
}
