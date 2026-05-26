import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services — Rozdi',
  description: 'Enterprise website redesigns, CRM systems, and AI automation workflows.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
