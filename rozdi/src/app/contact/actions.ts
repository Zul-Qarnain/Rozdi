'use server';

import { prisma } from '@/lib/prisma';

export async function submitLead(formData: FormData) {
  try {
    const fullName = formData.get('fullName') as string;
    const company = formData.get('company') as string;
    const corporateEmail = formData.get('corporateEmail') as string;
    const projectScope = formData.get('projectScope') as string;
    const message = formData.get('message') as string;

    if (!fullName || !company || !corporateEmail || !projectScope) {
      return { success: false, error: 'Please fill in all required fields.' };
    }

    await prisma.lead.create({
      data: {
        fullName,
        company,
        corporateEmail,
        projectScope,
        message,
        status: 'new',
      }
    });

    return { success: true };
  } catch (_error) {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
