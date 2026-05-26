import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Research — Rozdi',
  description: 'Read our published research on enterprise UI/UX and operational efficiency.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
