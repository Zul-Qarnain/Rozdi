'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Mail, Sparkles } from 'lucide-react';

function MockDashboardImage({ type }: { type: string }) {
  return (
    <div className="w-full h-[200px] bg-[#F9F9F9] rounded-none overflow-hidden relative border-b border-[#E5E7EB] flex items-center justify-center p-4">
      {type === 'web' && (
        <div className="w-[85%] h-[80%] bg-white rounded-none shadow-sm border border-[#E5E7EB] flex flex-col overflow-hidden transform -rotate-2 scale-105">
          <div className="h-4 bg-[#F9F9F9] border-b border-[#E5E7EB] flex items-center px-2 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]"/><div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]"/><div className="w-1.5 h-1.5 rounded-full bg-[#E5E7EB]"/>
          </div>
          <div className="flex-1 flex p-2 gap-2">
            <div className="w-1/3 h-full bg-[#E5E7EB] rounded-none"/>
            <div className="w-2/3 h-full bg-[#F9F9F9] rounded-none"/>
          </div>
        </div>
      )}
      {type === 'crm' && (
        <div className="w-[90%] h-[90%] bg-white rounded-none shadow-sm border border-[#E5E7EB] p-3 flex flex-col gap-2">
          <div className="w-24 h-3 bg-[#E5E7EB] rounded-none" />
          <div className="flex gap-2">
            <div className="w-12 h-12 rounded-full border-4 border-[#1A1A1A] border-r-transparent" />
            <div className="flex flex-col gap-1">
              <div className="w-16 h-2 bg-[#F9F9F9] rounded-none" />
              <div className="text-xl font-bold text-[#1A1A1A]">827</div>
            </div>
          </div>
          <div className="flex-1 bg-[#FDFDF0] rounded-none mt-2 flex flex-col gap-1 p-2 border border-[#E5E7EB]">
            <div className="w-full h-4 bg-white rounded-none flex items-center px-1"><div className="w-4 h-4 rounded-full bg-[#E5E7EB]"/> <div className="w-16 h-1 ml-2 bg-[#E5E7EB] rounded-none"/></div>
            <div className="w-full h-4 bg-white rounded-none flex items-center px-1"><div className="w-4 h-4 rounded-full bg-[#E5E7EB]"/> <div className="w-12 h-1 ml-2 bg-[#E5E7EB] rounded-none"/></div>
          </div>
        </div>
      )}
      {type === 'hr' && (
        <div className="w-[90%] h-[90%] bg-white rounded-none shadow-sm border border-[#E5E7EB] p-3 flex flex-col gap-2">
          <div className="w-20 h-3 bg-[#E5E7EB] rounded-none" />
          <div className="w-full h-6 bg-[#F9F9F9] rounded-none flex items-center px-2">
            <div className="w-3 h-3 text-[#1A1A1A]"/> <div className="w-20 h-1 bg-[#E5E7EB] rounded-none ml-2"/>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E5E7EB]" />
                  <div className="flex flex-col gap-0.5"><div className="w-16 h-1.5 bg-[#E5E7EB] rounded-none"/><div className="w-10 h-1 bg-[#F9F9F9] rounded-none"/></div>
                </div>
                <div className="w-8 h-2 rounded-none bg-[#1A1A1A]" />
              </div>
            ))}
          </div>
        </div>
      )}
      {type === 'mail' && (
        <div className="w-[90%] h-[90%] bg-white rounded-none shadow-sm border border-[#E5E7EB] flex overflow-hidden">
          <div className="w-1/3 bg-[#FDFDF0] border-r border-[#E5E7EB] p-2 flex flex-col gap-2">
            <div className="w-16 h-2 bg-[#1A1A1A] rounded-none" />
            <div className="w-12 h-2 bg-[#E5E7EB] rounded-none" />
            <div className="w-14 h-2 bg-[#E5E7EB] rounded-none" />
          </div>
          <div className="w-2/3 p-2 flex flex-col gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="flex items-center gap-2 p-1 border-b border-[#F9F9F9] last:border-0">
                <div className="w-5 h-5 rounded-full bg-[#E5E7EB]" />
                <div className="flex flex-col gap-0.5"><div className="w-16 h-1 bg-[#1A1A1A] rounded-none"/><div className="w-20 h-1 bg-[#E5E7EB] rounded-none"/></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const cards = [
    {
      type: 'web',
      icon: Globe,
      title: 'Website Redesigns',
      desc: 'Modern, fast, and conversion-focused websites that elevate your brand and engage users.'
    },
    {
      type: 'crm',
      icon: Users,
      title: 'CRM Systems',
      desc: 'Smart CRM solutions that help you build stronger relationships and drive business growth.'
    },
    {
      type: 'hr',
      icon: Users,
      title: 'Employee Platforms',
      desc: 'Streamlined platforms for your team to communicate, collaborate, and get things done.'
    },
    {
      type: 'mail',
      icon: Mail,
      title: 'Smart Mail Clients',
      desc: 'Powerful email solutions with automation that save time and increase productivity.'
    }
  ];

  return (
    <div className="flex-1 bg-transparent relative overflow-hidden font-sans">
      <main className="max-w-[1440px] mx-auto px-4 md:px-10 pt-16 pb-24 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-[#1A1A1A] text-[#1A1A1A] text-[13px] font-semibold px-5 py-1.5 rounded-none mb-6 uppercase tracking-widest"
          >
            What We Do
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight leading-none mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[20px] text-[#666]"
          >
            Unified Enterprise Operational Engine Matrix
          </motion.p>
        </div>

        {/* 4 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-[#FDFDF0] rounded-none p-3 pb-8 shadow-sm border border-[#E5E7EB] flex flex-col relative group"
            >
              <MockDashboardImage type={card.type} />
              
              {/* Floating Icon */}
              <div className="absolute top-[176px] left-8 w-14 h-14 bg-white rounded-none shadow-sm flex items-center justify-center text-[#1A1A1A] border border-[#E5E7EB]">
                <card.icon size={24} strokeWidth={1.5} />
              </div>

              <div className="px-5 pt-16">
                <h3 className="text-[20px] font-bold text-[#1A1A1A] mb-3">{card.title}</h3>
                <p className="text-[#666] text-[15px] leading-relaxed mb-6">{card.desc}</p>
                <button className="w-10 h-10 rounded-none border border-[#E5E7EB] bg-white flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all ml-auto">
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-none border border-[#1A1A1A] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
        >
          <div className="absolute left-[-20px] bottom-[-40px] w-[300px] h-[300px] opacity-20 pointer-events-none">
            <div className="w-[200px] h-[200px] rounded-full border-[30px] border-[#1A1A1A] absolute top-10 left-10 transform rotate-12 skew-x-12" />
          </div>

          <div className="md:pl-[280px] flex-1 flex flex-col md:flex-row items-start md:items-center justify-between z-10 w-full gap-6">
            <div className="flex flex-col items-start">
              <div className="bg-[#1A1A1A] text-white text-[12px] font-semibold px-4 py-1.5 rounded-none mb-4 flex items-center gap-2 uppercase tracking-widest">
                <Sparkles size={14} /> AI-Powered Growth
              </div>
              <h2 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-3">AI Web Agents & SEO Optimization</h2>
              <p className="text-[#666] text-[16px] max-w-[500px]">
                AI-driven agents that analyze, optimize, and scale your online presence for maximum visibility and results.
              </p>
            </div>
            <button className="bg-[#1A1A1A] text-white px-8 py-4 rounded-none font-semibold flex items-center gap-2 hover:bg-[#333] transition-colors shadow-sm whitespace-nowrap">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
