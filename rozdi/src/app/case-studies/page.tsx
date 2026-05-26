'use client';

import { motion } from 'framer-motion';

function MockCharts() {
  return (
    <div className="flex w-full gap-4 mt-8">
      <div className="w-1/2">
        <div className="text-center text-[12px] font-bold mb-4">Performance</div>
        <div className="flex items-end justify-between h-[80px] border-b border-[#E5E7EB] px-2 gap-2 relative">
          {/* Grid lines */}
          <div className="absolute left-0 bottom-1/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          <div className="absolute left-0 bottom-2/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          <div className="absolute left-0 bottom-3/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          
          <div className="w-1/4 h-[30%] bg-[#1A1A1A]" />
          <div className="w-1/4 h-[50%] bg-[#E5E7EB]" />
          <div className="w-1/4 h-[40%] bg-[#1A1A1A]" />
          <div className="w-1/4 h-[80%] bg-[#E5E7EB]" />
        </div>
        <div className="flex justify-between px-2 mt-2 text-[8px] text-gray-500 uppercase tracking-widest">
          <span>Performance</span><span>Performance</span><span>Mode</span><span>CTR</span>
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-center text-[12px] font-bold mb-4">Dark Mode</div>
        <div className="flex items-end justify-between h-[80px] border-b border-[#E5E7EB] px-2 gap-2 relative">
          <div className="absolute left-0 bottom-1/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          <div className="absolute left-0 bottom-2/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          <div className="absolute left-0 bottom-3/4 w-full h-[1px] bg-[#F9F9F9] -z-10" />
          
          <div className="w-1/4 h-[40%] bg-[#1A1A1A]" />
          <div className="w-1/4 h-[25%] bg-[#FDFDF0]" />
          <div className="w-1/4 h-[60%] bg-[#1A1A1A]" />
          <div className="w-1/4 h-[30%] bg-[#FDFDF0]" />
        </div>
        <div className="flex justify-between px-2 mt-2 text-[8px] text-gray-500 uppercase tracking-widest">
          <span>Performance</span><span>Performance</span><span>Mode</span><span>Dark</span>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <div className="flex-1 bg-[#F9F9F9] relative overflow-hidden font-sans">
      
      {/* Background Abstract SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%">
          <pattern id="wavy" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 100 Q 50 50, 100 100 T 200 100" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <path d="M0 120 Q 50 70, 100 120 T 200 120" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <path d="M0 140 Q 50 90, 100 140 T 200 140" fill="none" stroke="#E5E7EB" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wavy)" />
        </svg>
      </div>

      <main className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10 pt-12 pb-24">
        
        {/* Giant Watermark */}
        <div className="absolute top-0 left-0 w-full text-center overflow-hidden pointer-events-none z-0 mt-8">
          <h1 className="text-[120px] md:text-[200px] font-black text-[#E5E7EB] leading-none tracking-tight opacity-50 uppercase font-sans">
            Case Studies
          </h1>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight leading-none mb-12 relative z-10"
        >
          Research & Data
        </motion.h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-6 mt-8 relative z-10">
          
          {/* Card A: Light/Dark Mode */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FDFDF0] rounded-none border border-[#E5E7EB] shadow-sm p-4 md:p-8 flex flex-col justify-between"
          >
            <div className="text-[24px] font-bold mb-4">A</div>
            
            {/* Split Dashboard Image */}
            <div className="w-full bg-white rounded-none shadow-sm border border-[#E5E7EB] overflow-hidden flex h-[200px] md:h-[300px] mb-8">
              {/* White Side */}
              <div className="w-1/2 bg-white p-4 flex flex-col gap-4 border-r border-[#E5E7EB]">
                <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-2">
                  <div className="w-3 h-3 bg-[#E5E7EB] rounded-none"/> <div className="text-[12px] font-bold">Dashboard</div>
                </div>
                <div className="w-full h-24 bg-[#F9F9F9] rounded-none flex items-end p-2 border border-[#E5E7EB]">
                  <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 30 Q25 10 50 20 T100 10" fill="none" stroke="#1A1A1A" strokeWidth="2"/></svg>
                </div>
              </div>
              {/* Dark Side */}
              <div className="w-1/2 bg-[#1A1A1A] p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-[#444] pb-2 text-white">
                  <div className="text-[12px] font-bold">Dashboard</div>
                </div>
                <div className="w-full h-24 bg-[#333] rounded-none flex items-end p-2 border border-[#444]">
                  <svg className="w-full h-12" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 30 Q25 10 50 20 T100 10" fill="none" stroke="#FDFDF0" strokeWidth="2"/></svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
              <div className="w-full md:w-1/2 md:pr-4">
                <div className="text-[14px] text-[#666] mb-1 uppercase tracking-widest font-semibold">Layout Strategy:</div>
                <h2 className="text-[24px] md:text-[28px] font-bold text-[#1A1A1A] leading-tight">White vs Dark Mode for Executives</h2>
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <div className="text-[14px] font-bold mb-2 uppercase tracking-widest text-[#1A1A1A]">Research Insights</div>
                <ul className="list-disc pl-4 text-[13px] text-[#444] space-y-1">
                  <li>Enhanced focus for late-night reviews</li>
                  <li>24% reduction in eye strain reported</li>
                  <li>Preferred by 78% of surveyed leaders</li>
                </ul>
              </div>
            </div>

            <MockCharts />

          </motion.div>

          <div className="flex flex-col gap-6">
            {/* Card B: Heatmap */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#FDFDF0] rounded-none border border-[#E5E7EB] shadow-sm p-6 md:p-8 flex-1"
            >
              <div className="text-[24px] font-bold mb-4">B</div>
              <div className="flex flex-col md:flex-row md:h-[180px] items-start md:items-center mb-6 relative gap-8 md:gap-0">
                {/* Simulated Heatmap over Logo */}
                <div className="relative text-[48px] md:text-[72px] font-bold text-[#1A1A1A] z-0">
                  Rozdi
                  {/* Heatmap blur layers - adjusted to grayscale/monochromatic for DESIGN.md */}
                  <div className="absolute top-0 left-0 w-16 h-16 bg-[#1A1A1A] rounded-full blur-xl opacity-20 z-10 mix-blend-multiply" />
                  <div className="absolute top-2 left-10 w-20 h-20 bg-[#666] rounded-full blur-xl opacity-20 z-10 mix-blend-multiply" />
                  <div className="absolute top-4 left-24 w-16 h-16 bg-[#444] rounded-full blur-xl opacity-20 z-10 mix-blend-multiply" />
                  <div className="absolute top-2 right-4 w-24 h-24 bg-[#1A1A1A] rounded-full blur-xl opacity-10 z-10 mix-blend-multiply" />
                  
                  {/* Arrow overlay */}
                  <svg className="absolute -top-6 left-12 w-24 h-12 z-20" viewBox="0 0 100 50">
                    <path d="M0 40 Q50 0 90 30" fill="none" stroke="#1A1A1A" strokeWidth="3" markerEnd="url(#arrow)" />
                    <defs>
                      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#1A1A1A" />
                      </marker>
                    </defs>
                  </svg>
                </div>

                <div className="md:ml-12">
                  <h3 className="text-[20px] md:text-[24px] font-bold leading-tight text-[#1A1A1A]">Logo Orientation:<br/>Eye-Tracking Data<br/>Visualization</h3>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] pt-4">
                <p className="text-[14px] text-[#444] font-medium">
                  Heatmap analysis reveals <strong>45%</strong> faster recognition when logo is placed top-left, influencing homepage trust by 32%. Detailed eye path flow shown with arrows and concentration percentages.
                </p>
              </div>
            </motion.div>

            {/* Card C: Button Physics */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FDFDF0] rounded-none border border-[#E5E7EB] shadow-sm p-6 md:p-8 flex-1 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/3 relative h-[200px] md:h-auto mb-6 md:mb-0">
                <div className="text-[24px] font-bold absolute top-0 left-0">C</div>
                {/* 3D Shapes Simulation - monochromatic */}
                <div className="w-full h-full flex flex-col items-center justify-center pt-8 relative">
                  
                  {/* Arrows */}
                  <svg className="absolute left-0 h-full w-10 z-0" viewBox="0 0 20 100">
                    <path d="M10 20 Q0 35 10 50" fill="none" stroke="#1A1A1A" strokeWidth="1" markerEnd="url(#arrow-small)"/>
                    <path d="M10 50 Q0 65 10 80" fill="none" stroke="#1A1A1A" strokeWidth="1" markerEnd="url(#arrow-small)"/>
                    <defs>
                      <marker id="arrow-small" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                        <path d="M 0 0 L 10 5 L 0 10 z" fill="#1A1A1A" />
                      </marker>
                    </defs>
                  </svg>

                  {/* Rectangle */}
                  <div className="w-20 h-10 bg-[#E5E7EB] border border-[#1A1A1A] absolute top-12 z-30" />
                  
                  {/* Square */}
                  <div className="w-16 h-16 bg-[#1A1A1A] absolute top-28 z-10 shadow-sm" />
                  
                  {/* Diamond */}
                  <div className="w-16 h-16 absolute top-44 z-0 flex items-center justify-center transform rotate-45">
                    <div className="w-full h-full bg-[#FDFDF0] border border-[#1A1A1A]" />
                  </div>

                </div>
              </div>

              <div className="w-full md:w-2/3 md:pl-8 flex flex-col justify-center">
                <div className="text-[14px] text-[#666] mb-1 uppercase tracking-widest font-semibold">Button Physics:</div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#1A1A1A] leading-tight mb-4">Geometric Breakdown<br/>& Click-Through Rates</h3>
                
                <div className="flex gap-4 md:gap-6 mb-4">
                  <div className="flex flex-col"><span className="text-[16px] md:text-[18px] font-bold">+12%</span><span className="text-[10px] uppercase">CTR</span></div>
                  <div className="flex flex-col"><span className="text-[16px] md:text-[18px] font-bold">+8%</span><span className="text-[10px] uppercase">Engagement</span></div>
                  <div className="flex flex-col"><span className="text-[16px] md:text-[18px] font-bold">+15%</span><span className="text-[10px] uppercase">Conversion</span></div>
                </div>

                <div className="text-[14px] font-bold mb-1">Micro-interactions for macro results.</div>
                <p className="text-[13px] text-[#444] mb-3">Our analysis of tactile feedback and animation timing shows a direct correlation with user action.</p>
                <ul className="list-disc pl-4 text-[12px] text-[#666] space-y-1">
                  <li>Haptic feedback design</li>
                  <li>Easing function optimization</li>
                  <li>Timing and delay impact</li>
                </ul>
              </div>

            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
