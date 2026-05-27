'use client';

import { MoreHorizontal, Activity, ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function AnalyticsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="bg-[#FAFAFA]/80 backdrop-blur-md border border-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-none p-8 w-full max-w-[480px] relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-2 text-[#666] text-sm font-medium">
          <Activity size={16} /> SLA Compliance Rate
        </div>
        <button className="text-[#888] hover:text-[#333]">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="flex items-end gap-3 mb-6">
        <h2 className="text-[48px] font-bold text-[#1A1A1A] leading-none tracking-tight">99.8%</h2>
        <div className="flex items-center text-[#10B981] text-[11px] font-semibold bg-[#10B981]/10 px-2 py-0.5 rounded-none mb-2">
          &uarr; +0.4% vs last quarter
        </div>
      </div>

      <div className="flex items-center gap-5 mb-6">
        <div className="flex items-center gap-2 text-[11px] text-[#888] font-bold uppercase tracking-wider">
          <div className="w-3 h-3 bg-[#E5E5E5] rounded-sm" /> Before Rozdi
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#888] font-bold uppercase tracking-wider">
          <div className="w-3 h-3 bg-[#1A1A1A] rounded-sm" /> With Rozdi
        </div>
      </div>

      <div className="relative h-[200px] w-full flex items-end justify-between px-4 mb-8 mt-4">
        {/* Custom SVG Line passing through bars */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <svg viewBox="0 0 400 200" className="w-full h-full preserve-3d" preserveAspectRatio="none">
            <motion.path
              d="M 0 140 C 50 140, 80 40, 130 60 C 180 70, 200 160, 250 160 C 300 160, 350 20, 400 30"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 6"
              animate={{ strokeDashoffset: [0, -100] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </svg>
        </div>

        {/* Grouped Bars: Before vs After */}
        <div className="flex flex-col items-center justify-end h-full z-0">
          <div className="flex items-end gap-1.5 h-full">
            <div className="w-[28px] h-[45%] bg-[#E5E5E5] rounded-t-[3px]" />
            <div className="w-[28px] h-[85%] bg-[#1A1A1A] rounded-t-[3px]" />
          </div>
          <span className="text-[10px] font-bold text-[#888] mt-3 tracking-wider">VOICE</span>
        </div>
        
        <div className="flex flex-col items-center justify-end h-full z-0">
          <div className="flex items-end gap-1.5 h-full">
            <div className="w-[28px] h-[35%] bg-[#E5E5E5] rounded-t-[3px]" />
            <div className="w-[28px] h-[75%] bg-[#1A1A1A] rounded-t-[3px]" />
          </div>
          <span className="text-[10px] font-bold text-[#888] mt-3 tracking-wider">EMAIL</span>
        </div>
        
        <div className="flex flex-col items-center justify-end h-full z-0">
          <div className="flex items-end gap-1.5 h-full">
            <div className="w-[28px] h-[55%] bg-[#E5E5E5] rounded-t-[3px]" />
            <div className="w-[28px] h-[95%] bg-[#1A1A1A] rounded-t-[3px]" />
          </div>
          <span className="text-[10px] font-bold text-[#888] mt-3 tracking-wider">CHAT</span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#E5E7EB] to-transparent mb-6" />

      <button className="w-full flex items-center justify-between text-[13px] font-semibold text-[#666] hover:text-[#1A1A1A] transition-colors group">
        <div className="flex items-center gap-2">
          <FileText size={16} /> View Complete SLA Report
        </div>
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
