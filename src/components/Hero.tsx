'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'motion/react';
import { RegisterModal } from './RegisterModal';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !videoRef.current || !videoElementRef.current) return;

    videoElementRef.current.play().catch(() => {});

    // Entrance: letters stagger up one by one
    const letters = textRef.current.querySelectorAll('.hero-letter');
    gsap.fromTo(letters,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.2 }
    );

    // Extended pin: phase 1 = text scales up, phase 2 = blur + event details
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=250%',
        scrub: 1,
        pin: true,
      },
    });

    // Phase 1: text scales up, video shows through letters
    const zoomScale = window.innerWidth < 768 ? 180 : 50;
    tl.to(textRef.current, { scale: zoomScale, duration: 1, ease: 'power2.inOut' }, 0);

    // Blur the video as soon as text fills the screen (no mask fade — fading exposes black bg)
    tl.fromTo(videoElementRef.current,
      {
      filter: 'blur(0px) brightness(1)',
      // duration: 0.6,
      ease: 'power1.inOut',
    },
      {
      filter: 'blur(15px) brightness(0.5)',
      duration: 0.6,
      ease: 'power1.inOut',
    }, 0.9);

    // Details rise in while blur is already in progress
    tl.fromTo(
      detailsRef.current,
      { opacity: 0, y: 30, },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      1.0,
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Video */}
      <div ref={videoRef} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero.png"
          ref={videoElementRef}
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Text mask — multiply blend shows video only through white text letters */}
      <div
        className="w-[100vw] h-[100vh] absolute inset-0 z-10 flex items-center justify-center bg-black"
        style={{ mixBlendMode: 'multiply' }}
      >
        <h1
          ref={textRef}
          className="text-[12vw] md:text-[15vw] font-black leading-none tracking-tighter uppercase select-none pointer-events-none text-center text-white overflow-hidden"
        >
          <span className="block flex justify-center">
            {'unscripted'.split('').map((char, i) => (
              <span key={i} className="hero-letter inline-block">{char}</span>
            ))}
          </span>
        </h1>
      </div>

      {/* Phase 2: event details */}
      <div
        ref={detailsRef}
        className="absolute z-30 opacity-0 pointer-events-none inset-0 flex items-end px-10 pb-16 md:px-14 md:pb-20"
      >
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left: title + buttons */}
          <div>
            <h2 className="text-[9vw] md:text-[6.5vw] font-black uppercase leading-none tracking-tighter mb-6">
              <span className="block text-white">TED<span className="lowercase">x</span>Kings Square</span>
              <span className="block text-white">Women</span>
            </h2>
            <div className="flex gap-6 items-center mb-8">
              <span className="text-2xl md:text-3xl font-bold text-white">August 29, 2026</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span className="text-2xl md:text-3xl font-bold text-white/70">Benin City, Edo State</span>
            </div>
            <div className="flex gap-4 items-center pointer-events-auto">
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold px-7 py-4 rounded-full hover:bg-white/20 transition-all pointer-events-auto"
              >
                Get Tickets
                <span className="w-6 h-6 bg-ted-red rounded-full flex items-center justify-center text-xs">↗</span>
              </button>
              <a
                href="/events"
                className="border border-white/30 text-white text-sm font-bold px-7 py-4 rounded-full hover:bg-white/10 transition-all pointer-events-auto"
              >
                View Schedule
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
              <div className="w-px h-10 bg-gradient-to-b from-ted-red to-transparent" />
            </div>
          </div>

          {/* Right: description */}
          <p className="hidden md:block max-w-xs text-sm text-white/60 leading-relaxed">
            A live celebration of women who boldly chart their own paths — unfiltered, unbound, and unapologetically themselves.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>

    </section>
  );
};
