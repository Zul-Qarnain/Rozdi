export const runtime = "edge";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { AdminSidebar } from '@/components/admin/AdminSidebar';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  if (!session) {
    redirect('/admin/login');
  }

  return (
    <div className="flex w-full min-h-screen bg-[var(--color-canvas)]">
      <AdminSidebar email={session.user?.email || 'admin@rozdi.com'} />
      <div className="flex-1 ml-[64px] p-8 min-h-screen overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}
