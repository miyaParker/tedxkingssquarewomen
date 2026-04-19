'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const tedxTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Left col: label → heading → paragraph → button stagger up
    if (leftRef.current) {
      const els = Array.from(leftRef.current.children);
      gsap.set(els, { opacity: 0, y: 50 });
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }

    // Right card: fade + slide from right
    if (rightRef.current) {
      gsap.set(rightRef.current, { opacity: 0, x: 60 });
      gsap.to(rightRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          once: true,
        },
      });
    }

    // TEDx text: scroll-scrubbed left to right
    if (tedxTextRef.current) {
      gsap.fromTo(tedxTextRef.current,
        { x: '8%' },
        {
          x: '-8%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 md:px-12 bg-white text-obsidian relative z-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div ref={leftRef}>
          <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">About TED<span className='lowercase'>x</span></h2>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8">
            Ideas Worth <br /> <span className="text-ted-red">Spreading</span>
          </h3>
          <p className="text-md md:text-lg font-light leading-relaxed text-obsidian/70 mb-10">
            TEDx is a grassroots initiative created in the spirit of TED's mission to discover and spread ideas worth sharing. Independently organised under a free licence from TED, TEDx events unite passionate local communities through live speakers and recorded TED Talks — sparking meaningful conversations and connection. With over 4,000 events held annually worldwide, TEDx is where local voices meet world-changing ideas.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-3 bg-obsidian text-white font-black uppercase tracking-widest px-8 py-4 rounded-full hover:bg-ted-red transition-all duration-300 text-sm"
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div ref={rightRef} className="relative aspect-square glass bg-obsidian/5 rounded-3xl overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div ref={tedxTextRef} className="text-[20vw] font-black text-obsidian/5 select-none">TEDx</div>
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <h4 className="text-3xl font-bold uppercase tracking-tighter mb-4">TED<span className="lowercase">x</span>Kings Square Women 2026</h4>
            <p className="text-lg  opacity-60">
              This year's theme, "Unscripted," celebrates women who boldly chart their own paths — unfiltered, unbound, and unapologetically themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !contentRef.current) return;

    gsap.fromTo(contentRef.current, 
      { y: -150 },
      {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        }
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="bg-obsidian text-white pt-20 pb-10 px-6 md:px-12 relative overflow-hidden z-10">
      <div ref={contentRef} className="relative">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ted-red/20 blur-[120px] rounded-full -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Top Social Links */}
          <div className="border-b border-white/10 mb-20">
            <div className="flex flex-col md:grid md:grid-cols-4">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/tedxkingssquarewomen?igsh=dmhpYnkwM3NhZ2dh&utm_source=qr' },
                { name: 'WhatsApp', url: 'https://chat.whatsapp.com/BpjkeQJOVHK7D3zacrlVGw' },
                { name: 'X', url: 'https://x.com/tedxkingssquare?s=21&t=YAcBV-XQa2PxoOXOOZomJw' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-between items-center px-0 py-5 md:p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 md:hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl md:text-3xl font-black uppercase tracking-tighter">{social.name}</span>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
              <div className="hidden md:flex flex-col justify-center p-8">
                <p className="text-white/40 text-sm font-light leading-relaxed">
                  Join the conversation. Follow us for updates, behind-the-scenes, and ideas worth spreading.
                </p>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Event</h5>
              <ul className="space-y-4">
                {[
                  { label: 'Secure Your Spot', href: '/#register' },
                  { label: 'Event Schedule', href: '/#schedule' },
                  { label: 'Partnership Enquiry', href: 'mailto:tedxkingssquarewomen@gmail.com', external: true },
                ].map(link => (
                  <li key={link.label}><a href={link.href} className="text-xs font-bold uppercase tracking-widest hover:text-ted-red transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">About</h5>
              <ul className="space-y-4">
                {[
                  { label: 'About us', href: '/about' },
                  { label: 'Our Theme', href: '/about#theme' },
                  { label: 'Become a Speaker', href: '/support#speakers' },
                ].map(link => (
                  <li key={link.label}><a href={link.href} className="text-xs font-bold uppercase tracking-widest hover:text-ted-red transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Community</h5>
              <ul className="space-y-4">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/tedxkingssquarewomen?igsh=dmhpYnkwM3NhZ2dh&utm_source=qr', external: true },
                  { label: 'X (Twitter)', href: 'https://x.com/tedxkingssquare?s=21&t=YAcBV-XQa2PxoOXOOZomJw', external: true },
                  { label: 'WhatsApp Community', href: 'https://chat.whatsapp.com/BpjkeQJOVHK7D3zacrlVGw', external: true },
                ].map(link => (
                  <li key={link.label}><a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="text-xs font-bold uppercase tracking-widest hover:text-ted-red transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Resources</h5>
              <ul className="space-y-4">
                {[
                  { label: 'FAQs', href: '/about#faqs' },
                  { label: 'Support Center', href: '/support' },
                  { label: 'Contact Us', href: 'mailto:tedxkingssquarewomen@gmail.com', external: true },
                ].map(link => (
                  <li key={link.label}><a href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined} className="text-xs font-bold uppercase tracking-widest hover:text-ted-red transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Brand and Newsletter */}
          <div className="grid md:grid-cols-2 gap-20 items-end">
            <div>
              <a href="/" className="relative w-fit mb-8 block">
                <img src="/logo.png" alt="TEDxKings Square Women" className="h-10 w-auto brightness-0 invert" />
                <span className="absolute top-full left-0 text-[9px] text-white/40 uppercase tracking-widest whitespace-nowrap">x = independently organized TED event</span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Whether you're a visionary thinker or a curious learner — TEDxKings Square Women helps you 
                connect with ideas that spark change through live events and deep interaction.
              </p>
            </div>

            <div>
              <h4 className="text-3xl font-black uppercase tracking-tighter mb-8">Newsletters</h4>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="yourname@email.com"
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ted-red transition-colors"
                />
                <button className="cursor-pointer bg-ted-red hover:bg-ted-red/90 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Legal */}
          <div className="mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6">
            <p className="text-[10px] text-white/20 uppercase tracking-widest">
              © 2026 TEDxKings Square Women. Operated under license from TED.
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-[10px] text-white/20 uppercase tracking-widest hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-[10px] text-white/20 uppercase tracking-widest hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
