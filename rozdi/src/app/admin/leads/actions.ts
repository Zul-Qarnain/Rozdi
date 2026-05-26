// SECURITY NOTE: These Server Actions are protected by two layers:
// 1. Next.js Middleware (middleware.ts) — redirects unauthenticated users
// 2. Server-side session check in admin layout.tsx — verifies JWT on every render
// Database-level security is enforced via Neon DB access controls.
// Never expose DATABASE_URL or DIRECT_URL in client-side code.

'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

export async function updateLeadStatus(id: string, status: string) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  await prisma.lead.update({
    where: { id },
    data: { status }
  });

  revalidatePath('/admin/leads');
}
