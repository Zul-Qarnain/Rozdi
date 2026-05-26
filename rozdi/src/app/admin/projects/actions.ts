// SECURITY NOTE: These Server Actions are protected by two layers:
// 1. Next.js Middleware (middleware.ts) — redirects unauthenticated users
// 2. Server-side session check in admin layout.tsx — verifies JWT on every render
// Database-level security is enforced via Neon DB access controls.
// Never expose DATABASE_URL or DIRECT_URL in client-side code.

'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';
import { Project } from '@prisma/client';

export async function saveProject(data: Partial<Project>, id?: string) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  if (id) {
    await prisma.project.update({
      where: { id },
      data
    });
  } else {
    await prisma.project.create({ data: data as any }); // eslint-disable-line @typescript-eslint/no-explicit-any
  }

  revalidatePath('/admin/projects');
}

export async function deleteProject(id: string) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');

  await prisma.project.delete({ where: { id } });
  revalidatePath('/admin/projects');
}
