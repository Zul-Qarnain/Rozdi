'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import Image from 'next/image';
import { TeamMember } from '@prisma/client';

interface TeamDrawerProps {
  member: Partial<TeamMember> | null;
  onClose: () => void;
}

export function TeamDrawer({ member, onClose }: TeamDrawerProps) {
  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[150]"
          />
          <motion.div
            initial={{ x: 420 }}
            animate={{ x: 0 }}
            exit={{ x: 420 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 right-0 h-full w-full md:w-[420px] bg-white border-l border-[var(--color-border)] z-[200] overflow-y-auto flex flex-col"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-sm transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="relative w-full h-[260px]">
              <Image 
                src={member.headshotUrl || ''} 
                alt={member.name || ''} 
                fill 
                className="object-cover grayscale-[100%]" 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h2 className="text-[24px] font-bold text-[var(--color-charcoal)] mb-1">{member.name}</h2>
              <p className="text-[16px] text-[#444748] mb-6">{member.role}</p>
              
              <button className="w-full bg-[var(--color-charcoal)] text-white py-3 font-semibold mb-8 hover:bg-[#333] transition-colors">
                View Resume
              </button>
              
              <div className="w-full h-[1px] bg-[var(--color-border)] mb-8" />
              
              <div className="mb-8">
                <h3 className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] mb-4">Academic Milestones</h3>
                <ul className="list-disc pl-5 text-[15px] text-[#444748] space-y-2">
                  {(member.academicMilestones as string[] || []).map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="text-[12px] uppercase tracking-[0.05em] font-semibold text-[#666] mb-4">Awards & Recognition</h3>
                <ul className="list-disc pl-5 text-[15px] text-[#444748] space-y-2">
                  {(member.awards as string[] || []).map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto flex flex-col gap-3">
                <button className="w-full border border-[var(--color-charcoal)] bg-transparent text-[var(--color-charcoal)] py-3 font-semibold hover:bg-[var(--color-cream)] transition-colors">
                  Contact {member.name?.split(' ')[0]}
                </button>
                <button className="w-full border border-[var(--color-charcoal)] bg-transparent text-[var(--color-charcoal)] py-3 font-semibold hover:bg-[var(--color-cream)] transition-colors flex items-center justify-center gap-2">
                  <Download size={18} /> Download CV
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
