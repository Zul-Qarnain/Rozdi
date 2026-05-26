'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function MockProjectUI({ title }: { title: string }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className="text-[14px] font-medium text-[#1A1A1A] mb-4 text-center uppercase tracking-widest">{title}</div>
      <div className="w-full bg-white rounded-none shadow-sm border border-[#1A1A1A] h-[220px] flex flex-col overflow-hidden">
        {/* Browser header */}
        <div className="h-8 border-b border-[#E5E7EB] bg-[#F9F9F9] flex items-center px-3 justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[8px] text-white">R</div>
            <span className="text-[10px] font-bold">Rozdi</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-20 h-4 bg-[#E5E7EB] rounded-none" />
          </div>
          <div className="flex gap-1"><div className="w-2 h-2 rounded-none bg-[#E5E7EB]"/><div className="w-2 h-2 rounded-none bg-[#E5E7EB]"/><div className="w-2 h-2 rounded-none bg-[#E5E7EB]"/></div>
        </div>
        {/* Content body */}
        <div className="flex-1 flex p-3 gap-3">
          <div className="w-16 flex flex-col gap-2 border-r border-[#E5E7EB] pr-3">
            <div className="w-full h-3 bg-[#1A1A1A] rounded-none" />
            <div className="w-full h-2 bg-[#E5E7EB] rounded-none" />
            <div className="w-10 h-2 bg-[#E5E7EB] rounded-none" />
            <div className="w-12 h-2 bg-[#E5E7EB] rounded-none" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex gap-2 h-16">
              <div className="w-1/2 bg-[#1A1A1A] rounded-none p-2 text-white flex flex-col gap-1">
                <div className="w-10 h-1 bg-[#444] rounded-none" />
                <div className="w-16 h-2 bg-white rounded-none" />
              </div>
              <div className="w-1/2 bg-[#FDFDF0] border border-[#E5E7EB] rounded-none p-2" />
            </div>
            <div className="flex-1 flex gap-2">
              <div className="w-1/2 h-full flex items-end gap-1 px-2 border-t border-[#E5E7EB] pt-1 mt-auto">
                <div className="w-1/4 h-[40%] bg-[#E5E7EB] rounded-none"/><div className="w-1/4 h-[70%] bg-[#1A1A1A] rounded-none"/><div className="w-1/4 h-[50%] bg-[#E5E7EB] rounded-none"/><div className="w-1/4 h-[90%] bg-[#E5E7EB] rounded-none"/>
              </div>
              <div className="w-1/2 h-full border border-[#E5E7EB] rounded-none bg-[#F9F9F9]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      company: 'Badsha Group',
      logo: 'B',
      desc: 'Revolutionizing enterprise operations with integrated tech solutions.',
      uis: ['Corporate Portal & Data Hub', 'Automated Client Communications']
    },
    {
      company: 'FinTech Automation',
      logo: 'F',
      desc: 'Optimizing financial processes through intelligent automation.',
      uis: ['Minimist Dashboard & Transaction Analytics']
    },
    {
      company: 'Global Logistics',
      logo: 'G',
      desc: 'Streamlining supply chains with predictive analytics.',
      uis: ['Real-time tracking & route optimization']
    }
  ];

  return (
    <div className="flex-1 bg-[#F9F9F9] relative font-sans">
      <main className="px-4 md:px-10 pt-12 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight leading-none mb-12"
        >
          Our Projects
        </motion.h1>

        {/* Horizontal scroll container */}
        <div className="flex gap-8 overflow-x-auto pb-10 snap-x pr-4 md:pr-10 hide-scrollbar">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.company}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className={`flex-shrink-0 bg-white rounded-none border border-[#1A1A1A] shadow-sm overflow-hidden snap-start ${proj.uis.length > 1 ? 'w-[85vw] md:w-[900px]' : 'w-[85vw] md:w-[500px]'}`}
            >
              {/* Top Gray Section */}
              <div className="bg-[#FDFDF0] p-4 md:p-8 m-3 rounded-none border border-[#E5E7EB]">
                <div className="flex flex-col md:flex-row gap-8">
                  {proj.uis.map((ui, idx) => (
                    <MockProjectUI key={idx} title={ui} />
                  ))}
                </div>
              </div>

              {/* Bottom White Section */}
              <div className="px-6 md:px-10 py-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full border border-[#1A1A1A] flex items-center justify-center font-bold text-lg bg-[#1A1A1A] text-white">
                    {proj.logo}
                  </div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A]">{proj.company}</h3>
                </div>
                <p className="text-[#666] text-[16px] md:text-[18px] md:ml-16 max-w-[500px]">
                  {proj.desc}
                </p>
              </div>

              {/* Footer Actions */}
              <div className="border-t border-[#E5E7EB] px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <button className="flex items-center gap-2 text-[16px] md:text-[18px] text-[#1A1A1A] hover:text-[#444] transition-colors group uppercase tracking-widest font-semibold">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" /> View Project
                </button>
                <button className="bg-white border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 rounded-none font-medium text-[16px] hover:bg-[#1A1A1A] hover:text-white transition-colors">
                  Read More
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </main>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
