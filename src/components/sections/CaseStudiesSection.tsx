'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="flex flex-col justify-center bg-[#FDFCF8] py-24 relative overflow-hidden">
      
      {/* Watermark Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
         <span className="text-[120px] md:text-[200px] font-black text-[#F3EFE9] opacity-60 tracking-tight leading-none uppercase">
           Case Studies
         </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full relative z-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card A (Left side - Large) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#F5F4F0] rounded-[32px] border-4 border-[#1A1A1A] p-6 shadow-md flex flex-col relative"
          >
            <div className="absolute top-6 left-6 font-bold text-[24px]">A</div>
            
            {/* Dashboard Mockup Placeholder */}
            <div className="w-full h-[300px] mt-10 bg-gradient-to-r from-white to-[#1E293B] rounded-[20px] border border-[#E5E7EB] shadow-sm mb-10 overflow-hidden flex">
               <div className="w-1/2 h-full bg-white flex items-center justify-center text-[#888]">Light Mode UI</div>
               <div className="w-1/2 h-full bg-[#1E293B] flex items-center justify-center text-white/50">Dark Mode UI</div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="text-[14px] font-semibold text-[#888] mb-2">Layout Strategy:</div>
                <h3 className="text-[28px] font-bold text-[#1A1A1A] leading-tight mb-4">
                  White vs Dark Mode for Executives
                </h3>
              </div>
              <div className="flex-1">
                <div className="text-[14px] font-bold text-[#1A1A1A] mb-2">Research Insights</div>
                <ul className="text-[14px] text-[#555] space-y-2 list-disc pl-4 font-medium">
                  <li>Enhanced focus for late-night reviews</li>
                  <li>24% reduction in eye strain reported</li>
                  <li>Preferred by 78% of surveyed leaders</li>
                </ul>
              </div>
            </div>
            
            {/* Bar Chart Mockup Placeholder */}
            <div className="mt-8 bg-white/50 rounded-xl p-4 border border-[#E5E7EB]/50 flex justify-between h-32 items-end">
               <div className="w-8 bg-[#A68A61] rounded-t-sm h-[40%]" />
               <div className="w-8 bg-[#8BA989] rounded-t-sm h-[70%]" />
               <div className="w-8 bg-[#A68A61] rounded-t-sm h-[30%]" />
               <div className="w-8 bg-[#8BA989] rounded-t-sm h-[90%]" />
               <div className="w-8 bg-[#1A1A1A] rounded-t-sm h-[50%]" />
               <div className="w-8 bg-[#EAE6DF] rounded-t-sm h-[40%]" />
               <div className="w-8 bg-[#1A1A1A] rounded-t-sm h-[80%]" />
               <div className="w-8 bg-[#EAE6DF] rounded-t-sm h-[60%]" />
            </div>
          </motion.div>

          {/* Right Column (Cards B & C) */}
          <div className="flex flex-col gap-6">
            
            {/* Card B (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5F4F0] rounded-[32px] border-4 border-[#1A1A1A] p-8 shadow-md flex flex-col relative h-[50%]"
            >
              <div className="absolute top-6 left-6 font-bold text-[24px]">B</div>
              
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
                <div className="w-full sm:w-[45%] h-32 bg-white rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
                   {/* Heatmap placeholder */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-green-400/20 to-red-500/20 blur-xl mix-blend-multiply" />
                   <h4 className="text-[48px] font-black text-[#1A1A1A] relative z-10">Rozdi</h4>
                   <div className="text-[10px] font-bold text-[#1A1A1A] relative z-10">Optimal Brand Recognition</div>
                </div>
                
                <div className="w-full sm:w-[55%]">
                  <h3 className="text-[22px] font-bold text-[#1A1A1A] leading-tight mb-4">
                    Logo Orientation: Eye-Tracking Data Visualization
                  </h3>
                </div>
              </div>

              <div className="mt-8 border-t border-[#E5E7EB] pt-4">
                <p className="text-[14px] text-[#555] font-medium leading-relaxed">
                  Heatmap analysis reveals <strong>45%</strong> faster recognition when logo is placed top-left, influencing homepage trust by 32%. Detailed eye path flow shown with arrows and concentration percentages.
                </p>
              </div>
            </motion.div>

            {/* Card C (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F4F0] rounded-[32px] border-4 border-[#1A1A1A] p-8 shadow-md flex flex-col relative h-[50%]"
            >
              <div className="absolute top-6 left-6 font-bold text-[24px]">C</div>
              
              <div className="flex flex-col sm:flex-row items-center gap-8 mt-10 h-full">
                {/* 3D Geometric Shapes Placeholder */}
                <div className="w-[120px] h-[180px] flex flex-col items-center justify-between relative">
                   <div className="w-20 h-8 bg-[#EAE6DF] rounded-[100%] shadow-md border-b-4 border-[#D5D0C6]" />
                   <div className="w-14 h-14 bg-[#8BA989] rounded-full shadow-lg shadow-[#8BA989]/40 inset-shadow-sm border-2 border-white/20" />
                   <div className="w-16 h-16 bg-[#A68A61] transform -skew-x-12 -skew-y-12 shadow-xl" />
                   
                   {/* Arrows */}
                   <svg className="absolute -left-6 top-6 h-32 w-8 text-[#1A1A1A] opacity-30" viewBox="0 0 24 100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 0v100M6 94l6 6 6-6"/></svg>
                </div>

                <div className="flex-1">
                  <div className="text-[14px] font-semibold text-[#888] mb-1">Button Physics:</div>
                  <h3 className="text-[20px] font-bold text-[#1A1A1A] leading-tight mb-4">
                    3D Geometric Breakdown & Click-Through Rates
                  </h3>
                  <div className="text-[13px] font-bold text-[#1A1A1A] mb-2">Micro-interactions for macro results.</div>
                  <p className="text-[13px] text-[#555] font-medium leading-relaxed mb-4">
                    Our analysis of tactile feedback and animation timing shows a direct correlation with user action.
                  </p>
                  <ul className="text-[13px] text-[#555] space-y-1 list-disc pl-4 font-medium">
                    <li>Haptic feedback design</li>
                    <li>Easing function optimization</li>
                    <li>Timing and delay impact</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button className="bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#333] transition-all shadow-md text-[14px] uppercase tracking-widest">
            View All Case Studies <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
