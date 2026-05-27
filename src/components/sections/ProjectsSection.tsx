'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    id: 1,
    title: 'Financial Tech',
    category: 'Enterprise Automation',
    desc: 'An integrated data hub for a leading FinTech firm, automating supply chain tracking and client communications.',
  },
  {
    id: 2,
    title: 'Health AI',
    category: 'Healthcare Systems',
    desc: 'A high-precision dashboard for real-time health monitoring and anomaly detection using machine learning models.',
  },
  {
    id: 3,
    title: 'LogiFlow Supply Chain',
    category: 'Logistics Tech',
    desc: 'Optimizing route planning and warehouse management for global logistics providers through predictive analytics.',
  },
  {
    id: 4,
    title: 'Research Portal v2',
    category: 'Academic Research',
    desc: 'A collaborative platform for academic researchers to manage peer reviews and data sharing securely.',
  }
];

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="min-h-[calc(100vh-90px)] flex flex-col justify-center bg-white py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F3EFE9] text-[#8B7D6B] text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-full mb-6"
          >
            Our Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight mb-8"
          >
            Structural Precision.
          </motion.h1>
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F3F4F6] text-[#1A1A1A] transition-colors"
            >
              <ArrowLeft size={18} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F3F4F6] text-[#1A1A1A] transition-colors"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.6 }}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] bg-[#1A1A1A] rounded-[32px] p-8 md:p-10 flex flex-col snap-center group shadow-xl relative overflow-hidden"
            >
              {/* Decorative Mockup Area */}
              <div className="w-full h-[220px] bg-[#222] rounded-2xl mb-10 overflow-hidden relative border border-white/5 flex items-center justify-center">
                 <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                 <div className="w-[70%] h-[70%] bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm p-4 flex flex-col gap-3">
                    <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-full bg-white/10" />
                       <div className="flex-1 space-y-2 py-1">
                          <div className="h-2 w-full bg-white/10 rounded-full" />
                          <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                       </div>
                    </div>
                    <div className="flex-1 bg-white/5 rounded-lg border border-white/5" />
                 </div>
              </div>
              
              <div className="text-[12px] font-bold text-[#A68A61] uppercase tracking-widest mb-3">
                {project.category}
              </div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-white leading-tight mb-4 group-hover:text-[#A68A61] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[15px] text-[#888] leading-relaxed mb-10 font-medium">
                {project.desc}
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-[12px] font-bold text-white/50 uppercase tracking-widest">Case Study 0{project.id}</span>
                <button className="w-12 h-12 rounded-full bg-white text-[#1A1A1A] flex items-center justify-center hover:bg-[#A68A61] hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
