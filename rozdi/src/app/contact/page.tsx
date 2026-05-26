'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex-1 bg-[#F9F9F9] relative overflow-hidden font-sans">
      <main className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10 pt-12 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[48px] md:text-[64px] font-bold text-[#1A1A1A] tracking-tight leading-none mb-12"
        >
          Contact Us
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 bg-white border border-[#E5E7EB] p-8 md:p-12 shadow-sm rounded-none"
          >
            <h2 className="text-[24px] font-bold text-[#1A1A1A] mb-8 uppercase tracking-widest">Send a Message</h2>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-[#1A1A1A] tracking-widest uppercase">First Name</label>
                  <input type="text" className="w-full border border-[#E5E7EB] bg-[#FDFDF0] p-3 text-[14px] text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-[#1A1A1A] tracking-widest uppercase">Last Name</label>
                  <input type="text" className="w-full border border-[#E5E7EB] bg-[#FDFDF0] p-3 text-[14px] text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-[#1A1A1A] tracking-widest uppercase">Email Address</label>
                <input type="email" className="w-full border border-[#E5E7EB] bg-[#FDFDF0] p-3 text-[14px] text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-[#1A1A1A] tracking-widest uppercase">Subject</label>
                <input type="text" className="w-full border border-[#E5E7EB] bg-[#FDFDF0] p-3 text-[14px] text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors rounded-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-medium text-[#1A1A1A] tracking-widest uppercase">Message</label>
                <textarea rows={5} className="w-full border border-[#E5E7EB] bg-[#FDFDF0] p-3 text-[14px] text-[#1A1A1A] outline-none focus:border-[#1A1A1A] transition-colors rounded-none resize-none"></textarea>
              </div>

              <button type="button" className="bg-[#1A1A1A] text-white px-8 py-4 mt-4 font-semibold flex items-center justify-center gap-2 hover:bg-[#333] transition-colors shadow-sm rounded-none uppercase tracking-widest">
                Submit Message <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[400px] flex flex-col gap-8"
          >
            <div className="bg-[#FDFDF0] border border-[#E5E7EB] p-8 shadow-sm rounded-none flex-1">
              <h2 className="text-[20px] font-bold text-[#1A1A1A] mb-8 uppercase tracking-widest">Contact Information</h2>
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#1A1A1A] bg-white flex items-center justify-center rounded-none shrink-0">
                    <MapPin size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1A1A1A] mb-1 uppercase tracking-widest">Corporate Headquarters</h3>
                    <p className="text-[14px] text-[#666] leading-relaxed">
                      1200 Tech Boulevard<br />
                      Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#1A1A1A] bg-white flex items-center justify-center rounded-none shrink-0">
                    <Phone size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1A1A1A] mb-1 uppercase tracking-widest">Direct Line</h3>
                    <p className="text-[14px] text-[#666]">
                      +1 (800) 555-0199<br />
                      <span className="text-[12px] text-[#888]">Mon-Fri, 9am - 6pm PST</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-[#1A1A1A] bg-white flex items-center justify-center rounded-none shrink-0">
                    <Mail size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1A1A1A] mb-1 uppercase tracking-widest">General Inquiries</h3>
                    <p className="text-[14px] text-[#666]">
                      contact@rozdi.com<br />
                      press@rozdi.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1A1A1A] p-8 text-white rounded-none shadow-sm">
              <h2 className="text-[18px] font-bold mb-2 uppercase tracking-widest">Enterprise Support</h2>
              <p className="text-[13px] text-gray-400 mb-6">Existing enterprise clients have 24/7 access to priority support lines.</p>
              <button className="bg-white text-[#1A1A1A] px-6 py-3 font-bold text-[13px] rounded-none hover:bg-gray-200 transition-colors uppercase tracking-widest w-full">
                Client Portal Login
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
