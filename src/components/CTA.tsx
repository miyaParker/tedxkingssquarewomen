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
      <section ref={containerRef} className="py-40 px-6 md:px-12 bg-ted-red text-white overflow-hidden relative z-20">
        <div ref={textRef} className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="text-[40vw] font-black tracking-tighter uppercase leading-none select-none">IDEAS</div>
        </div>

        <div ref={contentRef} className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.5em] mb-8">Ready to join the conversation?</h2>
          <h3 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none mb-12">
            Secure Your <br /><span className="text-obsidian">Spot Now</span>
          </h3>
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer group bg-white text-ted-red px-12 py-6 rounded-full text-xl font-black uppercase tracking-widest hover:bg-obsidian hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4"
            >
              <span>Register for TED<span className='lowercase mx-0 px-0 inline'>x</span>Kings Square Women</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-sm font-medium opacity-80">
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
