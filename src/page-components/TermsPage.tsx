'use client';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { RegisterModal } from '../components/RegisterModal';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-white/10 pt-10 pb-4">
    <h3 className="text-lg font-black uppercase tracking-tight text-white mb-4">{title}</h3>
    <div className="text-white/50 font-light leading-relaxed space-y-3 text-sm">{children}</div>
  </div>
);

export const TermsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Navbar onRegister={() => setShowModal(true)} />

      <div className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Legal</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">
          Terms of<br />Service
        </h1>
        <p className="text-sm text-white/30 mb-16">Last updated: April 2026</p>

        <div className="space-y-2">
          <Section title="1. Acceptance of Terms">
            <p>By accessing and using the TEDxKings Square Women website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
          </Section>

          <Section title="2. About the Event">
            <p>TEDxKings Square Women is an independently organised event operating under a free licence from TED. The event is not affiliated with or sponsored by TED Conferences LLC beyond the licence agreement.</p>
          </Section>

          <Section title="3. Registration & Tickets">
            <p>Registering your interest does not guarantee a ticket. Ticket availability is limited and will be confirmed when early bird sales open. We reserve the right to refuse admission at our discretion.</p>
            <p>All ticket sales, once confirmed, are subject to our refund policy. Tickets are non-transferable unless explicitly stated otherwise.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content on this website — including text, graphics, logos, images, and design — is the property of TEDxKings Square Women or its content suppliers and is protected by applicable intellectual property laws.</p>
            <p>You may not reproduce, distribute, or use any content from this website without prior written permission.</p>
          </Section>

          <Section title="5. User Conduct">
            <p>When using our website or attending our event, you agree not to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Engage in any unlawful, harmful, or disruptive behaviour.</li>
              <li>Submit false or misleading information through our forms.</li>
              <li>Attempt to gain unauthorised access to any part of our systems.</li>
            </ul>
          </Section>

          <Section title="6. Event Photography & Recording">
            <p>By attending TEDxKings Square Women, you consent to being photographed or recorded for event documentation and promotional purposes. If you have concerns, please notify our team on the day.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>TEDxKings Square Women is not liable for any indirect, incidental, or consequential damages arising from your use of our website or attendance at our events. We make no warranties, express or implied, about the accuracy or completeness of the information on this site.</p>
          </Section>

          <Section title="8. Event Cancellation">
            <p>In the unlikely event that TEDxKings Square Women 2026 is cancelled or rescheduled due to circumstances beyond our control (including but not limited to force majeure), we will communicate updates via our official channels and email.</p>
          </Section>

          <Section title="9. Changes to Terms">
            <p>We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the revised terms.</p>
          </Section>

          <Section title="10. Governing Law">
            <p>These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Edo State, Nigeria.</p>
          </Section>

          <Section title="11. Contact">
            <p>For any questions regarding these terms, please contact us at <a href="mailto:tedxkingssquarewomen@gmail.com" className="text-ted-red hover:underline">tedxkingssquarewomen@gmail.com</a>.</p>
          </Section>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </div>
  );
};
