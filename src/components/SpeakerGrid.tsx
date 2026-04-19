'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SPEAKERS = [
  {
    name: "Dr. Osasere Omoruyi",
    role: "Cultural Historian",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    topic: "The Bronze Legacy in a Digital Age"
  },
  {
    name: "Efeosa Ighodaro",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
    topic: "Fintech for the Next Billion"
  },
  {
    name: "Adesuwa Etomi",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    topic: "Storytelling as a Tool for Change"
  },
  {
    name: "Prof. Victor Uwaifo Jr.",
    role: "Musicologist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    topic: "The Evolution of Benin Sound"
  }
];

export const SpeakerGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardTextsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const scrollWidth = sectionRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    const scrollDistance = scrollWidth - windowWidth;

    // Header entrance: stagger label → heading → paragraph
    if (headerRef.current) {
      const els = Array.from(headerRef.current.children);
      gsap.set(els, { opacity: 0, y: 50 });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }

    // Cards entrance: stagger in from below as section enters
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    // Card text: children stagger up after cards appear
    if (cardTextsRef.current.length) {
      cardTextsRef.current.forEach((textEl) => {
        if (!textEl) return;
        gsap.fromTo(
          Array.from(textEl.children),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.3,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }

    // Horizontal scroll pin
    const pin = gsap.to(sectionRef.current, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${scrollDistance}`,
        scrub: 0.6,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={triggerRef} id="speakers" className="overflow-hidden bg-obsidian">
      <div ref={sectionRef} className="h-screen w-max flex flex-row items-center px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="flex-shrink-0 flex flex-col justify-center pr-32 md:pr-96 py-20">
          <div ref={headerRef} className="max-w-2xl">
            <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">The Voices</h2>
            <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
              Featured <br /> <span className="text-mask">Speakers</span>
            </h3>
            <p className="mt-8 text-lg text-white/40 max-w-md font-light">
              Scroll to explore the bold voices taking the stage at TEDxKings Square Women 2026.
            </p>
          </div>
        </div>

        {/* Speaker Cards */}
        {SPEAKERS.map((speaker, index) => (
          <div
            key={speaker.name}
            ref={el => { if (el) cardsRef.current[index] = el; }}
            className="w-[85vw] md:w-[400px] h-[72vh] flex-shrink-0 mr-10 md:mr-20 rounded-3xl border border-white/15 bg-[#111] flex flex-col p-3 gap-0 group"
          >
            {/* Image with padding and rounded corners */}
            <div className="relative rounded-2xl overflow-hidden flex-1">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover blur-sm brightness-50 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Text below image */}
            <div
              ref={el => { if (el) cardTextsRef.current[index] = el; }}
              className="flex flex-col gap-1 px-4 py-6"
            >
              <h4 className="text-2xl font-semibold tracking-tight text-white blur-sm">{speaker.name}</h4>
              <p className="text-sm text-white/50 font-light blur-sm">{speaker.role}</p>
            </div>
          </div>
        ))}

        {/* End Spacer */}
        <div className="w-[5vw] flex-shrink-0" />
      </div>
    </div>
  );
};
