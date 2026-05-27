'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Shield, Cpu, BarChart } from 'lucide-react';

const services = [
  {
    title: 'Precision Web Architectures',
    id: '01',
    desc: 'Engineering high-performance, conversion-focused digital systems that serve as the foundation for your brand identity.',
    icon: Globe,
    tags: ['E-Commerce', 'Corporate Portals', 'Cloud Hosting']
  },
  {
    title: 'Intelligent CRM Integration',
    id: '02',
    desc: 'Seamlessly weaving CRM ecosystems into your operational workflow to optimize client relationships and data retention.',
    icon: Users,
    tags: ['Salesforce', 'HubSpot', 'Custom API']
  },
  {
    title: 'AI Operational Engines',
    id: '03',
    desc: 'Developing bespoke AI agents and automation matrices that reduce overhead and accelerate decision-making cycles.',
    icon: Cpu,
    tags: ['LLM Models', 'Task Automation', 'Predictive Ops']
  },
  {
    title: 'Data Security Protocols',
    id: '04',
    desc: 'Implementing institutional-grade security frameworks to protect your most valuable enterprise assets and data streams.',
    icon: Shield,
    tags: ['Encryption', 'Threat Monitoring', 'Compliance']
  }
];

export default function Services() {
  return (
    <div className="flex-1 bg-[#F9F9F9] min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4 md:px-16 py-20">
        
        {/* Header Section */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[12px] uppercase tracking-[0.2em] font-semibold text-[#888] mb-4"
          >
            Capabilities
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[80px] font-bold text-[#1A1A1A] tracking-tighter leading-[0.85] mb-10"
          >
            Operational <br/> Mastery.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-[#444748] max-w-[700px] leading-relaxed"
          >
            We provide the structural intelligence required to navigate and scale within the complexities of the modern BPO landscape.
          </motion.p>
        </div>

        {/* Services Gallery (Asymmetric Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group relative overflow-hidden"
            >
              <div className="p-10 md:p-16 h-full flex flex-col min-h-[500px]">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 border border-[#1A1A1A] flex items-center justify-center bg-[#FDFDF0] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-500">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-[40px] font-bold text-[#F3F4F6] group-hover:text-[#1A1A1A]/5 transition-colors duration-500">
                    {service.id}
                  </span>
                </div>

                <h3 className="text-[28px] md:text-[32px] font-bold text-[#1A1A1A] mb-6 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[16px] text-[#666] leading-relaxed mb-10 max-w-[400px]">
                  {service.desc}
                </p>

                <div className="mt-auto pt-10 flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest font-bold border border-[#E5E7EB] px-3 py-1 text-[#888]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Reveal Action */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button className="flex items-center gap-3 text-[14px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                    View Details <ArrowRight size={18} />
                  </button>
                </div>
              </div>
              
              {/* Architectural Detail (Top-Right Line) */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                <div className="absolute top-8 right-8 w-16 h-[1px] bg-[#E5E7EB]" />
                <div className="absolute top-8 right-8 w-[1px] h-16 bg-[#E5E7EB]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 md:p-20 bg-[#1A1A1A] text-white flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-[500px]">
            <div className="flex items-center gap-2 text-[#888] text-[12px] uppercase tracking-[0.2em] font-bold mb-6">
              <BarChart size={16} /> Performance Metrics
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold leading-tight mb-6">Real-time data at your fingertips.</h2>
            <p className="text-[#888] text-[16px] leading-relaxed">
              Every service we deploy includes a proprietary analytics suite designed to provide total transparency into system health and ROI.
            </p>
          </div>
          <button className="bg-white text-[#1A1A1A] px-12 py-5 font-bold text-[14px] uppercase tracking-widest hover:bg-[#FDFDF0] transition-colors whitespace-nowrap">
            Schedule a Demo
          </button>
        </motion.div>

      </main>
    </div>
  );
}
