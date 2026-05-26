'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full min-h-[60vh] bg-[var(--color-canvas)] flex flex-col items-center justify-center">
      <h2 className="text-[24px] font-bold text-[var(--color-charcoal)] mb-4">Something went wrong.</h2>
      <Link href="/" className="text-[#888] hover:text-[var(--color-charcoal)] transition-colors">
        &larr; Go Home
      </Link>
    </div>
  );
}
