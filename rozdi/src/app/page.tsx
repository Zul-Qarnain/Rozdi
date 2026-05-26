'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnalyticsCard } from '@/components/ui/AnalyticsCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex w-full relative overflow-hidden bg-transparent">
      {/* Background radial gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-[#E8E8E8] rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[-10%] right-[0%] w-[50%] h-[50%] bg-[#FFFFFF] rounded-full blur-[120px] opacity-90" />
      </div>

      <div className="flex-1 flex flex-col relative z-10 snap-start">
        
        {/* Hero Section */}
        <div className="flex-1 flex flex-col justify-center px-4 md:px-10 relative mt-10 md:mt-[40px]">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1300px] mx-auto z-10">
            
            {/* Left Column */}
            <div className="w-full md:w-[48%] flex flex-col items-start pr-0 md:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.6, ease: 'easeOut' }}
                className="bg-white border border-[#E5E7EB] text-[13px] font-semibold px-4 py-1.5 rounded-none text-[#4B5563] mb-8 shadow-sm"
              >
                AI-Powered Innovation
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                className="text-[clamp(40px,5.5vw,64px)] font-bold tracking-tight leading-[1.05] text-[#1A1A1A] mb-6"
              >
                AI Powered Tech<br/>Solutions For Your<br/>Business
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
                className="text-[18px] text-[#6B7280] leading-[1.6] max-w-[480px] mb-10 font-medium"
              >
                We help businesses integrate AI and cutting-edge technologies to drive growth, efficiency, and innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
                className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
              >
                <Link
                  href="/join-us"
                  className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-none font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 shadow-sm text-[15px] whitespace-nowrap min-w-[160px]"
                >
                  Join Us <ArrowRight size={18} />
                </Link>
                <Link
                  href="/projects"
                  className="bg-white border border-[#E5E7EB] text-[#1A1A1A] px-8 py-3.5 rounded-none font-semibold flex items-center justify-center gap-2 transition-colors hover:bg-[#F9F9F9] shadow-sm text-[15px] whitespace-nowrap min-w-[160px]"
                >
                  Explore <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[50%] flex justify-end mt-12 md:mt-0">
              <AnalyticsCard />
            </div>

          </div>

          {/* Hero Footer */}
          <div className="absolute bottom-8 left-10 right-10 flex flex-col md:flex-row items-center justify-between text-[#888] text-[13px] font-medium z-10 w-[calc(100%-80px)]">
            <div className="flex items-center gap-8">
              <span>Trusted by leading companies</span>
              <div className="flex items-center gap-6 text-[#6B7280] font-bold text-[15px]">
                <span className="flex items-center gap-1.5"><div className="w-4 h-4 rounded-full bg-blue-500"/> Google</span>
                <span className="flex items-center gap-1.5"><div className="w-4 h-4 grid grid-cols-2 gap-[1px]"><div className="bg-red-500"/><div className="bg-green-500"/><div className="bg-blue-500"/><div className="bg-yellow-500"/></div> Microsoft</span>
                <span className="flex items-center gap-1.5 text-black font-extrabold text-[16px] tracking-tighter"><span className="text-[#E11D48]">#</span>slack</span>
                <span className="flex items-center gap-1.5"><div className="w-4 h-4 bg-black rounded-sm text-white flex items-center justify-center text-[10px]">N</div> Notion</span>
                <span className="flex items-center gap-1.5"><div className="w-4 h-4 bg-[#0061FE] rotate-45 skew-x-12"/> Dropbox</span>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span>&copy; 2024 Rozdi. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-[#444] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#444] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
