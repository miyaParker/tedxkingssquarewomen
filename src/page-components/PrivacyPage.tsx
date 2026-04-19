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

export const PrivacyPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-obsidian text-white">
      <Navbar onRegister={() => setShowModal(true)} />

      <div className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Legal</p>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4">
          Privacy<br />Policy
        </h1>
        <p className="text-sm text-white/30 mb-16">Last updated: April 2026</p>

        <div className="space-y-2">
          <Section title="1. Who We Are">
            <p>TEDxKings Square Women is an independently organised TEDx event operated under licence from TED. Our contact email is <a href="mailto:tedxkingssquarewomen@gmail.com" className="text-ted-red hover:underline">tedxkingssquarewomen@gmail.com</a>.</p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect personal information you voluntarily provide, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Your full name and email address when you register interest or subscribe to our newsletter.</li>
              <li>Any information you provide when contacting us via our support form.</li>
            </ul>
            <p>We do not collect sensitive personal data, payment information, or data from minors under 13.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information solely to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Notify you when early bird tickets go live.</li>
              <li>Send event updates, speaker announcements, and newsletters (only if you opted in).</li>
              <li>Respond to enquiries submitted via our contact form.</li>
            </ul>
            <p>We will never sell, rent, or share your data with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Data Storage & Security">
            <p>Your data is processed via Resend (email delivery service) and stored securely. We retain your information only as long as necessary to fulfil the purposes described above, or as required by law.</p>
          </Section>

          <Section title="5. Your Rights">
            <p>Under applicable data protection law, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction or deletion of your data.</li>
              <li>Withdraw consent to receive communications at any time.</li>
            </ul>
            <p>To exercise any of these rights, email us at <a href="mailto:tedxkingssquarewomen@gmail.com" className="text-ted-red hover:underline">tedxkingssquarewomen@gmail.com</a>.</p>
          </Section>

          <Section title="6. Cookies">
            <p>Our website may use essential cookies for performance and analytics. We do not use cookies for advertising or cross-site tracking. By continuing to use our site, you consent to our use of essential cookies.</p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>Our site contains links to external platforms (Instagram, X, WhatsApp). We are not responsible for the privacy practices of those platforms. Please review their respective privacy policies.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our website constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="9. Contact">
            <p>For any privacy-related questions, please contact us at <a href="mailto:tedxkingssquarewomen@gmail.com" className="text-ted-red hover:underline">tedxkingssquarewomen@gmail.com</a>.</p>
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
