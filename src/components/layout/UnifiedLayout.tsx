'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, HomeIcon, Layers, Folder, BookOpen, Users, Menu, X } from 'lucide-react';
import { Logo, LogoText } from '@/components/ui/Logo';

import { useState } from 'react';

function GlobalSidebar() {
  const pathname = usePathname();
  const navItems = [
    { icon: HomeIcon, label: 'Home', href: '/' },
    { icon: Layers, label: 'Services', href: '/services' },
    { icon: Folder, label: 'Projects', href: '/projects' },
    { icon: BookOpen, label: 'Case Studies', href: '/case-studies' },
    { icon: Users, label: 'Team', href: '/team' },
  ];

  return (
    <div className="hidden md:flex fixed top-0 left-0 w-[90px] h-screen flex-col items-center py-6 bg-white z-40 border-r border-[#E5E7EB]">
      {/* Top Logo */}
      <div className="mb-12">
        <Logo className="w-10 h-10 drop-shadow-sm" />
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-6 w-full items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link href={item.href} key={item.label} className="flex flex-col items-center gap-1.5 w-full cursor-pointer group">
              <div className={`p-2.5 rounded-none transition-all ${isActive ? 'bg-[#1A1A1A] shadow-sm' : 'hover:bg-[#F3F4F6]'}`}>
                <item.icon size={22} className={isActive ? 'text-white' : 'text-[#888] group-hover:text-[#1A1A1A]'} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[11px] font-medium ${isActive ? 'text-[#1A1A1A]' : 'text-[#888]'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Profile - Removed as per request */}
    </div>
  );
}

function GlobalNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Projects', href: '/projects' },
    { label: 'Team', href: '/team' },
  ];

  return (
    <nav className="fixed top-0 left-0 md:left-[90px] right-0 h-[90px] z-50 flex items-center justify-between pr-4 md:pr-10 pl-4 md:pl-6 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <Link href="/"><LogoText /></Link>
      
      {/* Desktop Links */}
      <div className="hidden xl:flex items-center gap-6 xl:gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[15px] flex flex-col items-center relative cursor-pointer ${isActive ? 'text-[#1A1A1A] font-semibold' : 'text-[#666] hover:text-[#1A1A1A] font-medium'}`}
            >
              <div className="flex items-center gap-1.5">
                {link.label}
              </div>
              {isActive && (
                <div className="absolute -bottom-2 w-1.5 h-1.5 bg-[#1A1A1A] rounded-none" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Actions & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden md:flex bg-[#1A1A1A] text-white text-[14px] px-6 py-2.5 rounded-none font-semibold items-center gap-2 hover:bg-[#333] transition-colors shadow-sm"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
        <button 
          className="xl:hidden p-2 text-[#1A1A1A]" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[90px] left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-[#E5E7EB] p-6 flex flex-col gap-6 xl:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-[18px] flex items-center justify-between ${isActive ? 'text-[#1A1A1A] font-bold' : 'text-[#666] font-medium'}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#1A1A1A] text-white text-[16px] px-6 py-4 rounded-none font-semibold flex items-center justify-center gap-2 hover:bg-[#333] transition-colors shadow-sm mt-4"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </nav>
  );
}

export function UnifiedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  return (
    <div className="flex w-full min-h-screen relative bg-[#F9F9F9]">
      <GlobalSidebar />
      <div className="flex-1 ml-0 md:ml-[90px] flex flex-col min-h-screen relative z-10 pt-[90px]">
        <GlobalNavbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </div>
    </div>
  );
}
