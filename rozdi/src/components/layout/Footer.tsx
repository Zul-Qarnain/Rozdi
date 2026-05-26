import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-16 pb-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col h-full">
            <div className="font-bold text-[24px] tracking-tightest mb-4 text-white">Rozdi</div>
            <p className="text-[14px] text-[#888] mb-8 md:mb-0">
              Research-driven BPO solutions for Bangladeshi enterprises.
            </p>
            <div className="text-[12px] text-[#666] mt-auto">
              &copy; 2025 Rozdi. All rights reserved.
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-[12px] uppercase text-[#666] tracking-[0.05em] font-semibold mb-6">
              Navigation
            </div>
            <div className="flex flex-col gap-[10px]">
              <Link href="/" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Home</Link>
              <Link href="/projects" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Our Projects</Link>
              <Link href="/services" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Our Services</Link>
              <Link href="/case-studies" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Case Studies</Link>
              <Link href="/join-us" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Join Us</Link>
              <Link href="/contact" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-[12px] uppercase text-[#666] tracking-[0.05em] font-semibold mb-6">
              Get In Touch
            </div>
            <div className="flex flex-col gap-[10px]">
              <a href="mailto:hello@rozdi.com" className="text-[14px] text-[#ccc] hover:text-white transition-colors">hello@rozdi.com</a>
              <a href="https://wa.me/placeholder" target="_blank" rel="noreferrer" className="text-[14px] text-[#ccc] hover:text-white transition-colors">WhatsApp</a>
              <a href="https://calendly.com/rozdi" target="_blank" rel="noreferrer" className="text-[14px] text-[#ccc] hover:text-white transition-colors">Book a Call</a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-white/10" />
      </div>
    </footer>
  );
}
