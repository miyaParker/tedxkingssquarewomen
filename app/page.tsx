'use client';

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from '../src/components/Navbar';
import { Hero } from '../src/components/Hero';
import { SpeakerGrid } from '../src/components/SpeakerGrid';
import { Schedule, Partners } from '../src/components/Schedule';
import { CTA } from '../src/components/CTA';
import { About, Footer } from '../src/components/Footer';
import { SmoothScroll } from '../src/components/SmoothScroll';
import { RegisterModal } from '../src/components/RegisterModal';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-obsidian selection:bg-ted-red selection:text-white">
        <Navbar onRegister={() => setShowModal(true)} />
        <main>
          <Hero />
          <SpeakerGrid />
          <Schedule />
          <About />
          <Partners />
          <CTA />
        </main>
        <Footer />
        <AnimatePresence>
          {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}
