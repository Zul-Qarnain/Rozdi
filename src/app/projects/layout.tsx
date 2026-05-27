import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects — Rozdi',
  description: 'Explore the enterprise AI and BPO solutions we have built for Bangladeshi companies.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
