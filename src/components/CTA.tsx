'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RegisterModal } from './RegisterModal';

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    gsap.to(textRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    if (contentRef.current) {
      const els = Array.from(contentRef.current.children);
      gsap.set(els, { opacity: 0, y: 60 });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }
  }, []);

  return (
    <>
      <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-12 bg-ted-red text-white overflow-hidden relative z-20">
        <div ref={textRef} className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="text-[40vw] font-black tracking-tighter uppercase leading-none select-none">IDEAS</div>
        </div>

        <div ref={contentRef} className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] mb-6 md:mb-8">Ready to join the conversation?</h2>
          <h3 className="text-[15vw] md:text-9xl font-black tracking-tighter uppercase leading-none mb-10 md:mb-12">
            Secure Your <br /><span className="text-obsidian">Spot Now</span>
          </h3>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer group bg-white text-ted-red w-full max-w-sm md:max-w-none md:w-auto px-8 md:px-12 py-5 md:py-6 rounded-full text-base md:text-xl font-black uppercase tracking-widest hover:bg-obsidian hover:text-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-3 md:gap-4"
            >
              <span className="md:hidden">Register Now</span>
              <span className="hidden md:inline">Register for TED<span className='lowercase mx-0 px-0 inline'>x</span>Kings Square Women</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-xs md:text-sm font-medium opacity-80">
              Limited slots available &nbsp;·&nbsp; Early Bird tickets coming soon
            </p>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};
