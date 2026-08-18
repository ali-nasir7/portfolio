import type { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Ali Nasir — software engineering roles, freelance work, or collaboration.',
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}
