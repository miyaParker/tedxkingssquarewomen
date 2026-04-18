/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpeakerGrid } from './components/SpeakerGrid';
import { Schedule, Partners } from './components/Schedule';
import { CTA } from './components/CTA';
import { About, Footer } from './components/Footer';
import { SmoothScroll } from './components/SmoothScroll';
import { AboutPage } from './pages/AboutPage';
import { SupportPage } from './pages/SupportPage';
import { EventsPage } from './pages/EventsPage';

const Home = () => (
  <SmoothScroll>
    <div className="relative min-h-screen bg-obsidian selection:bg-ted-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SpeakerGrid />
        <Schedule />
        <About />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  </SmoothScroll>
);

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </AnimatePresence>
  );
}
