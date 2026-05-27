"use client";
export const runtime = "edge";


import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError('Invalid credentials');
      setLoading(false);
    } else {
      router.push('/admin');
    }
  }

  return (
    <div className="w-full min-h-screen bg-[var(--color-canvas)] flex items-center justify-center p-6">
      <div className="bg-white border border-[var(--color-border)] p-10 w-full max-w-[400px]">
        <div className="text-center mb-8">
          <h1 className="font-bold text-[24px] tracking-tightest mb-1 text-[var(--color-charcoal)]">Rozdi</h1>
          <p className="text-[13px] text-[#888]">Staff Portal &mdash; Authorized Access Only</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            required 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="border border-[var(--color-border)] p-3 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]"
          />
          <input 
            required 
            type="password" 
            name="password" 
            placeholder="Password" 
            className="border border-[var(--color-border)] p-3 text-[14px] focus:outline-none focus:border-[var(--color-charcoal)]"
          />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[var(--color-charcoal)] text-white py-3 font-semibold mt-2 hover:bg-[#333] transition-colors disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
          
          {error && <div className="text-red-600 text-[14px] mt-2 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
}
