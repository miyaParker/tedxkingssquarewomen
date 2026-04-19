'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCHEDULE_ITEMS = [
  { time: "11:00 – 11:10 AM",  duration: "10 mins",  event: "Opening Speech" },
  { time: "11:10 AM – 1:15 PM", duration: "~2 hrs",  event: "Talks & Performances" },
  { time: "1:15 – 2:00 PM",    duration: "45 mins",  event: "The Square (Panel Session)" },
  { time: "2:00 – 2:30 PM",    duration: "30 mins",  event: "Closing Performance" },
  { time: "2:30 – 2:50 PM",    duration: "20 mins",  event: "Closing Remarks & The UNVEILING" },
];

export const Schedule = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading: label then title stagger up
    if (headingRef.current) {
      const els = Array.from(headingRef.current.children);
      gsap.set(els, { opacity: 0, y: 40 });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }

    // Schedule rows: stagger in one by one
    if (itemsRef.current.length) {
      gsap.set(itemsRef.current, { opacity: 0, x: -30 });
      gsap.to(itemsRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      });
    }

    // Sticky image: fade + slide in from right
    if (imageRef.current) {
      gsap.set(imageRef.current, { opacity: 0, x: 40 });
      gsap.to(imageRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="schedule" className="pt-24 pb-32 px-6 md:px-12 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">The Journey</h2>
          <h3 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Event <span className="text-mask">Schedule</span>
          </h3>
        </div>

        {/* Content row: items left, image right */}
        <div className="grid md:grid-cols-[1fr_320px] gap-12 items-start border-t border-white/10">

          {/* Schedule list */}
          <div className="divide-y divide-white/10">
            {SCHEDULE_ITEMS.map((item, index) => (
              <div
                key={index}
                ref={el => { if (el) itemsRef.current[index] = el; }}
                className="group py-8 flex flex-col gap-2 hover:pl-4 transition-all duration-300"
              >
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">{item.time}</p>
                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-ted-red transition-colors duration-300">
                  {item.event}
                </h3>
              </div>
            ))}
          </div>

          {/* Floating image */}
          <div ref={imageRef} className="hidden md:block sticky top-32">
            <img
              src="/events.jpg"
              alt="Event"
              className="w-full aspect-[3/4] object-cover rounded-2xl brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export const Partners = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;
    const els = Array.from(contentRef.current.children);
    gsap.set(els, { opacity: 0, y: 50 });
    gsap.to(els, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} id="partners" className="py-32 px-6 md:px-12 bg-obsidian border-t border-white/10">
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-6">Partners</h2>
        <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
          Be Part of <br /><span className="text-mask">Something Big</span>
        </h3>
        <p className="text-lg text-white/40 font-light leading-relaxed mb-12">
          We welcome organizations and individuals who share our vision. Partner with us to support this year's event and connect with a growing community of changemakers.
        </p>
        <a
          href="mailto:partner@tedxkingssquarewomen.com"
          className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest px-10 py-5 rounded-full hover:bg-white/20 transition-all text-sm"
        >
          Become a Partner
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </section>
  );
};
