'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Globe, Phone } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const mockTeam = [
  { id: 1, name: 'Dr. Sarah Chen', role: 'Lead AI Architect', tags: ['AI Architecture', 'Machine Learning', 'Systems'], img: 'https://i.pravatar.cc/300?img=5', bio: 'Former deep learning researcher at Stanford, specializing in large-scale model deployment.' },
  { id: 2, name: 'Kenji Tanaka', role: 'Cloud Systems', tags: ['AWS', 'Distributed Systems'], img: 'https://i.pravatar.cc/300?img=11', bio: '10 years experience building robust cloud infrastructure.' },
  { id: 3, name: 'Elena Rostova', role: 'Data Science', tags: ['Analytics', 'Python'], img: 'https://i.pravatar.cc/300?img=9', bio: 'Data science lead with a background in statistical physics.' },
  { id: 4, name: 'Marcus Thorne', role: 'Product Design', tags: ['UX/UI', 'User Research'], img: 'https://i.pravatar.cc/300?img=12', bio: 'Crafting intuitive interfaces for complex data tools.' },
  { id: 5, name: 'Li Wei', role: 'Security', tags: ['Cryptography', 'Network Security'], img: 'https://i.pravatar.cc/300?img=14', bio: 'Ensuring enterprise-grade security across all deployments.' },
  { id: 6, name: 'Sofia Patel', role: 'Frontend', tags: ['React', 'Performance'], img: 'https://i.pravatar.cc/300?img=20', bio: 'Web performance enthusiast and creative developer.' },
  { id: 7, name: 'David Colans', role: 'Backend', tags: ['Go', 'Microservices'], img: 'https://i.pravatar.cc/300?img=33', bio: 'Building scalable microservices and APIs.' },
  { id: 8, name: 'Alex Rivera', role: 'ML Engineer', tags: ['TensorFlow', 'PyTorch'], img: 'https://i.pravatar.cc/300?img=44', bio: 'Implementing state-of-the-art machine learning models.' },
  { id: 9, name: 'James Kim', role: 'DevOps', tags: ['CI/CD', 'Kubernetes'], img: 'https://i.pravatar.cc/300?img=55', bio: 'Streamlining deployment pipelines.' },
  { id: 10, name: 'Anna Ivanova', role: 'Researcher', tags: ['NLP', 'Transformers'], img: 'https://i.pravatar.cc/300?img=47', bio: 'Advancing natural language processing capabilities.' },
  { id: 11, name: 'Thomas Wright', role: 'Operations', tags: ['Agile', 'Strategy'], img: 'https://i.pravatar.cc/300?img=59', bio: 'Keeping the teams aligned and projects on track.' },
  { id: 12, name: 'Zoe Martinez', role: 'QA Lead', tags: ['Testing', 'Automation'], img: 'https://i.pravatar.cc/300?img=49', bio: 'Ensuring zero defects in production releases.' }
];

export function TeamSection() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const activeMember = mockTeam.find(m => m.id === selectedId) || mockTeam[0];

  return (
    <section id="team" className="min-h-[calc(100vh-90px)] flex items-center bg-[#FDFCF8] py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F3EFE9] text-[#8B7D6B] text-[11px] font-bold uppercase tracking-widest px-6 py-2 rounded-full inline-block mb-4"
          >
            Our Experts
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-bold text-[#1A1A1A] tracking-tight leading-tight"
          >
            The Minds Behind Rozdi
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Grid */}
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {mockTeam.map((member) => {
                const isActive = selectedId === member.id;
                return (
                  <motion.div 
                    key={member.id}
                    onClick={() => setSelectedId(member.id)}
                    className={`aspect-square rounded-[24px] overflow-hidden cursor-pointer relative border-4 transition-all duration-300 ${isActive ? 'border-[#A68A61] scale-105 shadow-lg z-10' : 'border-transparent hover:border-[#EAE6DF] hover:scale-105'}`}
                  >
                    <Image src={member.img} alt={member.name} fill className={`object-cover object-center transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale opacity-80'}`} />
                    {!isActive && (
                      <div className="absolute inset-0 bg-[#F5F4F0]/20 mix-blend-multiply" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-[40%]">
            <motion.div 
              key={activeMember.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[32px] border border-[#EAE6DF] shadow-sm p-8 md:p-10 flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative Blur */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#F5F4F0] rounded-full blur-[60px]" />
              
              <div className="relative z-10 flex-1">
                 <div className="w-24 h-24 rounded-full border border-[#E5E7EB] overflow-hidden mb-6 bg-[#F9F9F9]">
                    <Image src={activeMember.img} alt={activeMember.name} width={96} height={96} className="object-cover" />
                 </div>
                 
                 <h3 className="text-[32px] font-bold text-[#1A1A1A] leading-tight mb-2">
                   {activeMember.name}
                 </h3>
                 <p className="text-[#A68A61] font-bold text-[14px] uppercase tracking-widest mb-6">
                   {activeMember.role}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mb-8">
                   {activeMember.tags.map(tag => (
                     <span key={tag} className="bg-[#F3EFE9] text-[#666] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#EAE6DF]">
                       {tag}
                     </span>
                   ))}
                 </div>
                 
                 <p className="text-[15px] text-[#666] leading-relaxed mb-8 font-medium">
                   {activeMember.bio}
                 </p>
                 
                 <div className="flex gap-4 mb-10">
                    <button className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#888] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"><Globe size={16} /></button>
                    <button className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#888] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"><Phone size={16} /></button>
                    <button className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center text-[#888] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"><Mail size={16} /></button>
                 </div>
              </div>
              
              <button className="w-full bg-[#1A1A1A] text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#333] transition-colors relative z-10 shadow-md">
                Explore Background <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
