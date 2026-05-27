import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Us — Rozdi Elite Specialist Team',
  description: 'Join the most research-driven tech team in Bangladesh.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
