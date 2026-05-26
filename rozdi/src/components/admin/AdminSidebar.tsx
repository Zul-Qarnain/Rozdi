'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart2, Inbox, FolderOpen, Users, Settings, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export function AdminSidebar({ email }: { email: string }) {
  const pathname = usePathname();

  const navItems = [
    { icon: BarChart2, href: '/admin', label: 'Analytics' },
    { icon: Inbox, href: '/admin/leads', label: 'Leads' },
    { icon: FolderOpen, href: '/admin/projects', label: 'Projects' },
    { icon: Users, href: '/admin/team', label: 'Team' },
    { icon: Settings, href: '/admin/settings', label: 'Settings' },
  ];

  return (
    <div className="fixed left-0 top-0 w-[64px] h-screen bg-[#1A1A1A] z-40 flex flex-col items-center py-6">
      <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-[#1A1A1A] mb-12 shrink-0">
        R
      </div>

      <nav className="flex flex-col gap-6 w-full">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`w-full flex justify-center py-2 relative group ${isActive ? 'text-white' : 'text-white/50 hover:text-white transition-colors'}`}
              title={item.label}
            >
              {isActive && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />}
              <item.icon size={20} />
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-6 w-full group">
        <div className="text-[10px] text-white/40 truncate max-w-[50px] -rotate-90 origin-center tracking-wider uppercase" title={email}>
          {email.split('@')[0]}
        </div>
        <button 
          onClick={() => signOut({ redirectTo: '/admin/login' })}
          className="text-white/50 hover:text-white transition-colors"
          title="Log Out"
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}
