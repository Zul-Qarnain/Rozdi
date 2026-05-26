// SECURITY NOTE: These Server Actions are protected by two layers:
// 1. Next.js Middleware (middleware.ts) — redirects unauthenticated users
// 2. Server-side session check in admin layout.tsx — verifies JWT on every render
// Database-level security is enforced via Neon DB access controls.
// Never expose DATABASE_URL or DIRECT_URL in client-side code.

'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function saveTeamMember(data: any, id?: string) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  if (id) {
    await prisma.teamMember.update({
      where: { id },
      data
    });
  } else {
    await prisma.teamMember.create({ data });
  }

  revalidatePath('/admin/team');
}

export async function deleteTeamMember(id: string) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  await prisma.teamMember.delete({ where: { id } });
  revalidatePath('/admin/team');
}

export async function swapDisplayOrder(id1: string, order1: number, id2: string, order2: number) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  await prisma.$transaction([
    prisma.teamMember.update({ where: { id: id1 }, data: { displayOrder: order2 } }),
    prisma.teamMember.update({ where: { id: id2 }, data: { displayOrder: order1 } })
  ]);

  revalidatePath('/admin/team');
}
