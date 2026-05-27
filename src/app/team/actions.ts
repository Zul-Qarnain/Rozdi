'use server';

import { prisma } from '@/lib/prisma';

export async function submitApplication(formData: FormData) {
  await prisma.lead.create({
    data: {
      fullName: formData.get('fullName') as string,
      company: 'Career Application',
      corporateEmail: formData.get('email') as string,
      projectScope: `Career: ${formData.get('role')}`,
      message: formData.get('coverNote') as string,
    }
  });
  return { success: true };
}
