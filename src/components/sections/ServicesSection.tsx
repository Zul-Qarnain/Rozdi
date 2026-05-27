'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Mail } from 'lucide-react';


export function ServicesSection() {
  const newServices = [
    {
      title: 'Website Redesigns',
      desc: 'Modern, fast, and conversion-focused websites that elevate your brand and engage users.',
      icon: Globe,
      graphicBg: 'bg-[#F9F9F9]'
    },
    {
      title: 'CRM Systems',
      desc: 'Smart CRM solutions that help you build stronger relationships and drive business growth.',
      icon: Users,
      graphicBg: 'bg-[#1E293B]' // Mockup shows a dark dashboard
    },
    {
      title: 'Employee Platforms',
      desc: 'Streamlined platforms for your team to communicate, collaborate, and get things done.',
      icon: Users,
      graphicBg: 'bg-[#FDFDF0]'
    },
    {
      title: 'Smart Mail Clients',
      desc: 'Powerful email solutions with automation that save time and increase productivity.',
      icon: Mail,
      graphicBg: 'bg-white'
    }
  ];

  return (
    <section id="services" className="min-h-[calc(100vh-90px)] flex flex-col justify-center bg-[#F5F4F0] py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F3EFE9] text-[#8B7D6B] text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-full mb-6"
          >
            What We Do
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[18px] text-[#666] font-medium"
          >
            Unified Enterprise Operational Engine Matrix
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {newServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[24px] p-6 shadow-sm border border-[#E5E7EB]/50 flex flex-col hover:shadow-md transition-shadow relative group"
            >
              {/* Graphic Area Placeholder */}
              <div className={`w-full h-[180px] ${service.graphicBg} rounded-xl mb-12 flex items-center justify-center overflow-hidden border border-[#E5E7EB]/30 relative`}>
                 <div className="absolute -bottom-6 left-6 w-12 h-12 bg-white rounded-2xl shadow-sm border border-[#E5E7EB]/50 flex items-center justify-center text-[#B08D5B]">
                    <service.icon size={22} strokeWidth={2} />
                 </div>
                 {/* Decorative mock UI elements inside graphic area */}
                 <div className="w-[80%] h-[60%] bg-white/40 rounded-lg shadow-sm border border-white/50 backdrop-blur-sm" />
              </div>
              
              <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-3 leading-tight">
                {service.title}
              </h3>
              
              <p className="text-[14px] text-[#666] leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>
              
              <div className="flex justify-end mt-auto">
                 <button className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white transition-colors group-hover:border-[#1A1A1A] text-[#1A1A1A]">
                    <ArrowRight size={16} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full bg-[#FDFCF8] rounded-[32px] border border-[#EAE6DF] shadow-sm p-10 flex flex-col lg:flex-row items-center gap-10"
        >
          {/* 3D Ring Graphic Placeholder */}
          <div className="w-24 h-24 bg-gradient-to-br from-[#EAE6DF] to-[#F5F4F0] rounded-[24px] flex items-center justify-center shadow-inner relative flex-shrink-0">
             <div className="absolute top-2 left-2 w-6 h-6 text-[#B08D5B]">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
             </div>
             <div className="w-16 h-16 rounded-full border-4 border-white shadow-md relative z-10" />
             <div className="absolute w-12 h-12 rounded-full border-4 border-[#B08D5B] rotate-45 z-20" />
          </div>

          <div className="flex-1">
            <div className="bg-[#F3EFE9] text-[#8B7D6B] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-4">
              AI-Powered Growth
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-3">
              AI Web Agents & SEO Optimization
            </h2>
            <p className="text-[#666] text-[15px] max-w-[600px]">
              AI-driven agents that analyze, optimize, and scale your online presence for maximum visibility and results.
            </p>
          </div>

          <button className="bg-[#A68A61] text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 hover:bg-[#8B7351] transition-colors shadow-md whitespace-nowrap">
            Learn More <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
