'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Badsha Group Operations',
    category: 'Enterprise Automation',
    desc: 'An integrated data hub for Bangladesh\'s largest textile conglomerate, automating supply chain tracking and client communications.',
    tags: ['React', 'AI Hub', 'Real-time Stats'],
    image: '/projects/badsha.jpg', // Placeholder
    featured: true
  },
  {
    title: 'FinTech Transaction Analytics',
    category: 'Financial Systems',
    desc: 'A high-precision dashboard for real-time transaction monitoring and anomaly detection using machine learning models.',
    tags: ['React', 'D3.js', 'Python'],
    image: '/projects/fintech.jpg'
  },
  {
    title: 'LogiFlow Supply Chain',
    category: 'Logistics Tech',
    desc: 'Optimizing route planning and warehouse management for global logistics providers through predictive analytics.',
    tags: ['Go', 'Kubernetes', 'Big Data'],
    image: '/projects/logistics.jpg'
  },
  {
    title: 'Research Portal v2',
    category: 'Academic Research',
    desc: 'A collaborative platform for academic researchers to manage peer reviews and data sharing securely.',
    tags: ['TypeScript', 'Prisma', 'NextAuth'],
    image: '/projects/research.jpg'
  }
];

export default function Projects() {
  return (
    <div className="flex-1 bg-[#F9F9F9] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-20">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[72px] font-bold text-[#1A1A1A] tracking-tighter leading-[0.9] mb-8"
          >
            Structural <br/> Precision.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-[#444748] max-w-[600px] leading-relaxed"
          >
            We don&apos;t just build software; we engineer architectural systems that withstand the complexities of modern enterprise environments.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className={project.featured ? 'lg:col-span-7 flex flex-col group' : 'lg:col-span-5 flex flex-col group'}
            >
              {/* Image Container (The "Digital Porcelain" look) */}
              <div className="relative aspect-[16/10] bg-[#FDFDF0] border border-[#E5E7EB] overflow-hidden mb-6 p-4 md:p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Mock UI Element within the card */}
                <div className="w-full h-full border border-[#1A1A1A]/10 bg-white shadow-sm relative z-10 p-4">
                   <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-3 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"/>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"/>
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"/>
                      </div>
                      <div className="h-4 w-32 bg-[#F9F9F9] border border-[#E5E7EB]"/>
                   </div>
                   <div className="space-y-3">
                      <div className="h-6 w-3/4 bg-[#1A1A1A]"/>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-[#FDFDF0] border border-[#E5E7EB]"/>
                        <div className="h-20 bg-[#F9F9F9] border border-[#E5E7EB]"/>
                      </div>
                      <div className="h-12 w-full bg-[#F3F4F6]"/>
                   </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-bold text-[#888] uppercase tracking-widest">{project.category}</span>
                  <div className="h-[1px] flex-1 bg-[#E5E7EB]" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1A1A1A] mb-3 group-hover:underline decoration-1 underline-offset-4 transition-all">
                  {project.title}
                </h3>
                <p className="text-[15px] text-[#666] leading-relaxed mb-6 max-w-[500px]">
                  {project.desc}
                </p>
                
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-[#1A1A1A] group/btn">
                    Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex gap-4 text-[#888]">
                    <ExternalLink size={16} className="cursor-pointer hover:text-[#1A1A1A] transition-colors" />
                    <GitBranch size={16} className="cursor-pointer hover:text-[#1A1A1A] transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-[#E5E7EB] flex flex-col items-center text-center"
        >
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-6">Have a complex project?</h2>
          <p className="text-[#666] max-w-[500px] mb-10">We specialize in systems that other agencies find too difficult. Let&apos;s discuss your requirements.</p>
          <button className="bg-[#1A1A1A] text-white px-10 py-4 font-bold text-[14px] uppercase tracking-widest hover:bg-[#333] transition-colors">
            Start a Consultation
          </button>
        </motion.div>

      </div>
    </div>
  );
}
