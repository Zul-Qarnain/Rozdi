'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Download } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const mockTeam = [
  { id: 1, name: 'Dr. Anya Sharma', role: 'AI Strategist', img: 'https://i.pravatar.cc/300?img=5', fullRole: 'Lead Research Scientist & AI Specialist' },
  { id: 2, name: 'Kenji Tanaka', role: 'Cloud Architect', img: 'https://i.pravatar.cc/300?img=11' },
  { id: 3, name: 'Elena Rostova', role: 'Data Science Lead', img: 'https://i.pravatar.cc/300?img=9' },
  { id: 4, name: 'Marcus Thorne', role: 'UX/UI Director', img: 'https://i.pravatar.cc/300?img=12' },
  { id: 5, name: 'Li Wei', role: 'Blockchain Specialist', img: 'https://i.pravatar.cc/300?img=14' },
  { id: 6, name: 'Sofia Patel', role: 'Cybersecurity Analyst', img: 'https://i.pravatar.cc/300?img=20' },
  { id: 7, name: 'David Colans', role: 'Elite Architect', img: 'https://i.pravatar.cc/300?img=33' },
  { id: 8, name: 'Elena Rostova', role: 'Lead UX', img: 'https://i.pravatar.cc/300?img=44' },
];

export default function JoinUs() {
  const [selectedId, setSelectedId] = useState<number | null>(1);

  return (
    <div className="flex-1 bg-[#F9F9F9] relative overflow-hidden font-sans flex flex-col items-center">
      
      {/* Background contour lines - monochromatic */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0 200 Q 250 100, 500 300 T 1000 200" fill="none" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M0 400 Q 250 300, 500 500 T 1000 400" fill="none" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M0 600 Q 250 500, 500 700 T 1000 600" fill="none" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M0 800 Q 250 700, 500 900 T 1000 800" fill="none" stroke="#1A1A1A" strokeWidth="2" />
        </svg>
      </div>

      <main className="w-full max-w-[1200px] px-4 md:px-10 relative z-10 pt-10 pb-24 text-center">
        <h1 className="text-[40px] md:text-[56px] font-bold text-[#1A1A1A] leading-tight tracking-tight mb-2">Rozdi Elite Specialist Team</h1>
        <p className="text-[18px] md:text-[20px] text-[#666] mb-16">Premium Research-Driven Enterprise Tech Solutions</p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockTeam.map((member) => {
            const isActive = selectedId === member.id;
            return (
              <div 
                key={member.id}
                onClick={() => setSelectedId(member.id)}
                className={`relative rounded-none overflow-hidden cursor-pointer transition-all ${isActive ? 'bg-[#FDFDF0] border-2 border-[#1A1A1A] shadow-sm z-10 scale-[1.02]' : 'bg-white border border-[#E5E7EB] hover:border-[#1A1A1A]'}`}
              >
                {isActive && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-none bg-[#1A1A1A] flex items-center justify-center shadow-sm z-20">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                )}
                <div className="w-full h-[220px] bg-[#F9F9F9] relative grayscale contrast-125 border-b border-[#E5E7EB]">
                  <Image src={member.img} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-[18px] font-bold text-[#1A1A1A]">{member.name}</h3>
                  <p className="text-[13px] text-[#666] uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Right Drawer */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ x: '100%', opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.5 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full max-w-[450px] h-screen bg-[#FDFDF0] z-[100] shadow-2xl border-l border-[#1A1A1A] p-6 md:p-10 overflow-y-auto"
          >
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute top-8 right-8 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors p-2"
            >
              <X size={24} strokeWidth={1.5} />
            </button>

            <div className="w-[180px] h-[180px] bg-[#F9F9F9] rounded-none overflow-hidden mb-8 relative grayscale contrast-125 shadow-sm border border-[#1A1A1A]">
              <Image src={mockTeam.find(m => m.id === selectedId)?.img || ''} alt="Profile" fill className="object-cover object-top" />
            </div>

            <h2 className="text-[32px] font-bold text-[#1A1A1A] leading-tight mb-2">{mockTeam.find(m => m.id === selectedId)?.name}</h2>
            <p className="text-[15px] text-[#666] font-medium mb-8 pb-8 border-b border-[#E5E7EB] uppercase tracking-widest">
              {mockTeam.find(m => m.id === selectedId)?.fullRole || mockTeam.find(m => m.id === selectedId)?.role}
            </p>

            <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-none font-medium text-[14px] hover:bg-[#333] transition-colors mb-10 shadow-sm uppercase tracking-widest">
              View Resume
            </button>

            <div className="mb-8">
              <h4 className="text-[16px] font-bold text-[#1A1A1A] mb-4 uppercase tracking-widest">Academic Milestones</h4>
              <ul className="list-disc pl-4 text-[14px] text-[#444] space-y-2">
                <li>Ph.D. in Computer Science, Stanford University</li>
                <li>M.S. in Artificial Intelligence, MIT</li>
                <li>Recipient of the Turing Scholars Award</li>
              </ul>
            </div>

            <div className="mb-12">
              <h4 className="text-[16px] font-bold text-[#1A1A1A] mb-4 uppercase tracking-widest">Design Awards</h4>
              <ul className="list-disc pl-4 text-[14px] text-[#444] space-y-2">
                <li>Winner, International Design Excellence Awards (IDEA) 2023 - Best AI Interface</li>
                <li>Red Dot Award 2022: Product Design (AI Platform)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <button className="bg-[#1A1A1A] text-white px-6 py-3 rounded-none font-medium text-[15px] hover:bg-[#333] transition-colors shadow-sm self-start uppercase tracking-widest">
                Contact {mockTeam.find(m => m.id === selectedId)?.name.split(' ')[0]}
              </button>
              <button className="flex items-center gap-2 text-[#666] hover:text-[#1A1A1A] text-[14px] font-medium transition-colors uppercase tracking-widest">
                <Download size={16} /> Download full CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
