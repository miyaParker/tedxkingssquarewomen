'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { RegisterModal } from '../components/RegisterModal';

gsap.registerPlugin(ScrollTrigger);

const Badge = () => (
  <div className="relative w-28 h-28 flex-shrink-0">
    <svg viewBox="0 0 120 120" className="w-full h-full">
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = 54;
        const x = 60 + r * Math.cos(rad);
        const y = 60 + r * Math.sin(rad);
        return <circle key={i} cx={x} cy={y} r="5" fill="#E62B1E" />;
      })}
      <circle cx="60" cy="60" r="46" fill="#E62B1E" />
      <text x="60" y="54" textAnchor="middle" fontFamily="inherit" fontWeight="900" fontSize="26" fill="white">29</text>
      <text x="60" y="70" textAnchor="middle" fontFamily="inherit" fontWeight="600" fontSize="9" fill="white" letterSpacing="1">August 2026</text>
    </svg>
  </div>
);


const VirtualEventCard = () => (
  <div className="rounded-3xl border border-white/10 overflow-hidden">
    <div className="p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
      <div>
        <span className="inline-flex items-center gap-1.5 bg-ted-red/20 text-ted-red text-[10px] font-bold uppercase tracking-[0.3em] px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-ted-red animate-pulse" />
          Virtual · Free Entry
        </span>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white mb-4">
          The Warm-Up<br /><span className="text-ted-red">Pre-Event</span>
        </h2>
        <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm">
          A free online gathering in May — meet our speakers, get a sneak peek of what's coming, and connect with the community ahead of August 29.
        </p>
      </div>

      <div className="flex flex-col gap-6 md:items-end flex-shrink-0">
        <div className="flex flex-col gap-3 md:text-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">When</p>
            <p className="text-white font-bold text-sm">May 2026 · TBC</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-1">Where</p>
            <p className="text-white font-bold text-sm">Online — Zoom / YouTube Live</p>
          </div>
        </div>
        <div className="cursor-pointer flex items-center gap-3 border border-white/10 rounded-2xl px-6 py-4">
          <span className="w-2 h-2 rounded-full bg-ted-red animate-pulse flex-shrink-0" />
          <p className="text-white/50 text-xs font-bold uppercase tracking-widest leading-relaxed">
            Watch out for the link — <span className="text-white">follow our socials</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TicketCard = ({ onRegister }: { onRegister: () => void }) => (
  <div className="relative bg-obsidian rounded-3xl overflow-visible">
    {/* Corner cutouts */}
    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-white z-10" />
    <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-white z-10" />
    <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-white z-10" />
    <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-white z-10" />
    {/* Separator notches — at 70% from left */}
    <div className="hidden md:block absolute -top-4 w-8 h-8 rounded-full bg-white z-10" style={{ left: '70%', transform: 'translateX(-50%)' }} />
    <div className="hidden md:block absolute -bottom-4 w-8 h-8 rounded-full bg-white z-10" style={{ left: '70%', transform: 'translateX(-50%)' }} />

    <div className="flex flex-col md:grid md:grid-cols-[70%_30%]">
      {/* Left: details */}
      <div className="p-10 md:p-14">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-6 block">TEDxKings Square Women · 2026</span>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white mb-3">
          Unscripted <br /><span className="text-ted-red">Benin City</span>
        </h2>
        <div className="flex flex-wrap items-center gap-4 mt-6 mb-10 text-white/60 text-xl font-semibold">
          <span>August 29, 2026</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span>Benin City, Edo State</span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span>11:00 AM</span>
        </div>
        <button
          onClick={onRegister}
          className="inline-flex cursor-pointer items-center gap-3 bg-white text-obsidian font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-ted-red hover:text-white transition-all duration-300 text-sm group"
        >
          Register Your Interest
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Right: image with centered dashed left border */}
      <div className="relative h-60 md:h-auto overflow-hidden" style={{ borderLeft: '2px dashed rgba(255,255,255,0.2)' }}>
        <img
          src="../public/events.jpg"
          alt="Event"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-obsidian/70" />
      </div>
    </div>
  </div>
);

export const EventsPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const preEventRef = useRef<HTMLDivElement>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.events-letter');
        gsap.fromTo(letters,
          { y: '110%', opacity: 0 },
          { y: '0%', opacity: 1, duration: 0.7, stagger: 0.06, ease: 'power3.out', delay: 0.2 }
        );
      }
      if (bannerRef.current) {
        const els = Array.from(bannerRef.current.children);
        gsap.set(els, { opacity: 0, y: 40 });
        gsap.to(els, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.6 });
      }
      if (preEventRef.current) {
        gsap.set(preEventRef.current, { opacity: 0, y: 60 });
        gsap.to(preEventRef.current, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: preEventRef.current, start: 'top 80%', once: true },
        });
      }
      if (ticketRef.current) {
        gsap.set(ticketRef.current, { opacity: 0, y: 60 });
        gsap.to(ticketRef.current, {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: ticketRef.current, start: 'top 80%', once: true },
        });
      }
      if (galleryRef.current) {
        const imgs = galleryRef.current.querySelectorAll('.gallery-img');
        gsap.set(imgs, { opacity: 0, scale: 0.95 });
        gsap.to(imgs, {
          opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: galleryRef.current, start: 'top 80%', once: true },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      className="relative min-h-screen bg-obsidian selection:bg-ted-red selection:text-white"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar onRegister={() => setShowModal(true)} />

      {/* Hero */}
      <div ref={heroRef} className="relative h-screen flex flex-col justify-end overflow-hidden bg-obsidian">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Big title */}
        <div ref={titleRef} className="relative z-10 px-6 md:px-12 pb-0 overflow-hidden">
          <h1 className="text-[18vw] font-black uppercase tracking-tighter leading-none text-white select-none flex">
            {'UNSCRIPTED'.split('').map((char, i) => (
              <span key={i} className="events-letter inline-block">{char}</span>
            ))}
          </h1>
        </div>

        {/* Red banner strip */}
        <div ref={bannerRef} className="relative z-10 bg-ted-red px-6 md:px-12 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/60 mb-1">The Official Event</p>
            <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white leading-none">
              TEDxKings Square Women 2026
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-white/70">
              <p className="font-bold text-white uppercase tracking-widest text-xs mb-1">When</p>
              <p className="text-lg font-semibold">August 29, 2026 · 11:00 AM</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-white/70">
              <p className="font-bold text-white uppercase tracking-widest text-xs mb-1">Where</p>
              <p className="text-lg font-semibold">Benin City, Edo State</p>
            </div>
            <Badge />
          </div>
        </div>
      </div>

      {/* Virtual Pre-Event */}
      <section className="py-24 px-6 md:px-12 bg-obsidian border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-3">Before the Main Event</h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-white">
                Virtual <span className="text-ted-red">Pre-Event</span>
              </h3>
            </div>
            <p className="hidden md:block text-sm text-white/30 font-light max-w-xs text-right leading-relaxed">
              A free online gathering in May — the perfect warm-up before August 29.
            </p>
          </div>
          <div ref={preEventRef}>
            <VirtualEventCard />
          </div>
        </div>
      </section>

      {/* Ticket section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-3">Main Event</h2>
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-obsidian">
                Your Ticket
              </h3>
            </div>
            <p className="hidden md:block text-sm text-obsidian/40 font-light max-w-xs text-right leading-relaxed">
              Secure your place at the most anticipated women's ideas event in Benin City.
            </p>
          </div>
          <div ref={ticketRef}>
            <TicketCard onRegister={() => setShowModal(true)} />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-obsidian/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-4">On the Day</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none text-obsidian mb-8">
              What to Expect
            </h3>
            <div className="space-y-6">
              {[
                { time: '11:00 AM', event: 'Opening Speech' },
                { time: '11:10 AM', event: 'Talks & Performances' },
                { time: '1:15 PM', event: 'The Square — Panel Session' },
                { time: '2:00 PM', event: 'Closing Performance' },
                { time: '2:30 PM', event: 'Closing Remarks & The Unveiling' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <span className="text-xs font-bold uppercase tracking-widest text-obsidian/30 pt-1 w-20 flex-shrink-0">{item.time}</span>
                  <div className="flex-1 border-t border-obsidian/10 pt-4">
                    <p className="text-lg font-black uppercase tracking-tight text-obsidian group-hover:text-ted-red transition-colors">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Who's it for</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase leading-none text-obsidian mb-8">
              This Event Is For You
            </h3>
            {[
              { label: 'Women of all backgrounds', desc: 'From students to CEOs — every woman belongs here.' },
              { label: 'Allies & Champions', desc: 'Men and allies who believe in women\'s progress.' },
              { label: 'Emerging Leaders', desc: 'Youth with bold ideas and bigger dreams.' },
              { label: 'Curious Minds', desc: 'Anyone hungry for ideas that spark real change.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-obsidian/10 hover:border-ted-red/30 transition-colors group">
                <div className="w-2 h-2 rounded-full bg-ted-red flex-shrink-0 mt-2" />
                <div>
                  <p className="text-sm font-black uppercase tracking-tight text-obsidian mb-1">{item.label}</p>
                  <p className="text-sm text-obsidian/50 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-24 px-6 md:px-12 bg-obsidian">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-12">Atmosphere</h2>
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
            ].map((src, i) => (
              <div key={i} className={`gallery-img overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 md:col-span-1 row-span-2' : ''}`}>
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover aspect-square brightness-75 hover:brightness-100 hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 md:px-12 bg-ted-red text-white text-center">
        <h2 className="text-xs font-bold uppercase tracking-[0.5em] mb-6 opacity-70">Don't miss out</h2>
        <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-10">
          Be There <br /><span className="text-obsidian">August 29</span>
        </h3>
        <button
          onClick={() => setShowModal(true)}
          className="group bg-white text-ted-red px-12 py-6 rounded-full text-lg font-black uppercase tracking-widest hover:bg-obsidian hover:text-white transition-all duration-500 shadow-2xl inline-flex items-center gap-4"
        >
          Register Your Interest
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      <Footer />

      <AnimatePresence>
        {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </motion.div>
  );
};
