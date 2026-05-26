import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-[60vh] bg-[var(--color-canvas)] flex flex-col items-center justify-center">
      <h2 className="text-[24px] font-bold text-[var(--color-charcoal)] mb-4">404 &mdash; Page not found</h2>
      <Link href="/" className="text-[#888] hover:text-[var(--color-charcoal)] transition-colors">
        &larr; Go Home
      </Link>
    </div>
  );
}
