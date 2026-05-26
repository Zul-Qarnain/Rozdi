import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Rozdi',
  description: 'Book a discovery call to discuss your enterprise technical requirements.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
