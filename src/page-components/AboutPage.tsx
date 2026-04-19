'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const SocialLinks = () => (
  <div className="flex gap-4 mt-3">
    <a href="https://www.instagram.com/tedxkingssquarewomen?igsh=dmhpYnkwM3NhZ2dh&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">Instagram</a>
    <a href="https://x.com/tedxkingssquare?s=21&t=YAcBV-XQa2PxoOXOOZomJw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">X (Twitter)</a>
    <a href="https://chat.whatsapp.com/BpjkeQJOVHK7D3zacrlVGw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">WhatsApp</a>
  </div>
);

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is TEDxKings Square Women?",
    a: <p>TEDxKings Square Women is an <span className="font-medium">independently organized TED event</span> that showcases women's voices, women-led innovations, and ideas worth spreading — through talks that inspire action and meaningful conversations.</p>,
  },
  {
    q: "How is a TEDx event different from a TED Conference?",
    a: <p>TED Conferences are organized and run directly by TED. TEDx events, on the other hand, are <span className="font-medium">independently organized under a TED license</span>, following the TED format with the shared goal of spreading ideas worth spreading.</p>,
  },
  {
    q: "Is this event only for women?",
    a: <>
      <p className="mb-3"><span className="font-medium">No!</span> This event is open to everyone. We welcome:</p>
      <ul className="space-y-1 text-white/50 font-light">
        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Women of all backgrounds</li>
        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Men who champion women's progress</li>
        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Youths and emerging leaders</li>
        <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Women's allies ready for tangible change</li>
      </ul>
    </>,
  },
  {
    q: "What age group is this for?",
    a: <p><span className="font-medium">All ages.</span> We believe powerful ideas have no age limit. Whether you're a student, a professional, or a seasoned leader — there's a seat at the table for you.</p>,
  },
  {
    q: "Why is it called TEDxKings Square Women?",
    a: <p><span className="font-medium">Kings Square</span> is the beating heart of Benin City — a historic central gathering place. We chose it as our name to root this movement in community and place, and to put women's ideas at the very center of that stage.</p>,
  },
];

const OBJECTIVES = [
  {
    title: "Inspire Women to Author Their Futures",
    body: "Encouraging women to be active co-authors of the future.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Showcase Innovators and Amplify Women's Narratives",
    body: "Amplifying voices and impact stories of women — centering their experiences and visions.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Build a Connected Community",
    body: "Building a thriving network for mentorship and shared learning.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
];


const FAQItem = ({ q, a, open, onToggle }: { q: string; a: React.ReactNode; open: boolean; onToggle: () => void }) => {
  return (
    <div className="py-6 cursor-pointer group border-b border-white/10" onClick={onToggle}>
      <div className="flex justify-between items-start gap-8">
        <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-ted-red transition-colors">
          {q}
        </h4>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-ted-red">
            <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 pb-2 text-white/50 font-light leading-relaxed text-base">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AboutPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeObj, setActiveObj] = useState<number | null>(0);
  const hPinRef = useRef<HTMLDivElement>(null);
  const hTrackRef = useRef<HTMLDivElement>(null);
  const panel1HeadingRef = useRef<HTMLHeadingElement>(null);
  const panel2HeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const pin = hPinRef.current;
    const track = hTrackRef.current;
    if (!pin || !track) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: '-200vw',
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Boundary disk: rotate 180° as we scroll into Panel 2
      const arrow = pin.querySelector('.ted-tedx-arrow');
      if (arrow) {
        gsap.set(arrow, { rotate: 180 });
        gsap.to(arrow, {
          rotate: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: '+=100%',
            scrub: 1,
          },
        });
      }

      const disk = pin.querySelector('.boundary-disk');
      if (disk) {
        gsap.set(disk, { rotate: -90 });
        gsap.to(disk, {
          rotate: 270,
          ease: 'none',
          scrollTrigger: {
            trigger: pin,
            start: 'top top',
            end: '+=200%',
            scrub: 1,
          },
        });
      }
    });

    // Panel 2 heading: clip-path reveal from right to left
    if (panel2HeadingRef.current) {
      const spans = panel2HeadingRef.current.querySelectorAll('.reveal-word-2');
      gsap.set(spans, { clipPath: 'inset(0 0 0 100%)' });
      gsap.to(spans, {
        clipPath: 'inset(0 0 0 0%)',
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pin,
          start: () => `top+=${window.innerHeight * 0.4} top`,
          once: true,
        },
      });
    }

    // Panel 1 heading: clip-path reveal from bottom
    if (panel1HeadingRef.current) {
      const spans = panel1HeadingRef.current.querySelectorAll('.reveal-word');
      gsap.set(spans, { clipPath: 'inset(0 0 110% 0)' });
      gsap.to(spans, {
        clipPath: 'inset(0 0 -50% 0)',
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pin,
          start: 'top 45%',
          once: true,
        },
      });
    }

    // Refresh after page transition finishes to get correct measurements
    const t = setTimeout(() => ScrollTrigger.refresh(), 700);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);
  return (
    <motion.div
      className="relative min-h-screen bg-obsidian selection:bg-ted-red selection:text-white"
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Navbar />

      {/* Hero */}
      <section className="h-screen flex items-end px-6 md:px-12 pb-24 bg-obsidian border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-6">Our Story</h2>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
            About <br /><span className="text-mask">TED<span className='lowercase'>x</span>Kings<br />Square </span><span className="text-ted-red">Women</span>
          </h1>
        </div>
      </section>

      {/* Horizontal pan: About TED → What is TEDx? → About Us */}
      <div ref={hPinRef} className="h-screen overflow-hidden bg-white relative">
        <div ref={hTrackRef} className="flex w-[300vw] h-full relative">

          {/* Panel 1: About TED */}
          <div className="w-screen h-full flex-shrink-0 bg-white text-obsidian flex flex-col justify-center px-6 md:px-12 pt-24">
            <div className="max-w-7xl w-full mx-auto">
              <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-3">About TED</h2>
              <h3 ref={panel1HeadingRef} className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none flex flex-wrap gap-x-4">
                {['Ideas', 'Worth', 'Spreading'].map((word, i) => (
                  <span key={i} className={`reveal-word inline-block ${word === 'Spreading' ? 'text-ted-red' : ''}`}>{word}</span>
                ))}
              </h3>
              <div className="border-t border-obsidian/10 mt-8 pt-8 grid md:grid-cols-2 gap-12">
                <p className="text-base font-light leading-relaxed text-obsidian/70">
                  TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change — devoted to curiosity, reason, and wonder.
                </p>
                <div className="space-y-4 text-base text-obsidian/70 font-light leading-relaxed">
                  <p>TED began in 1984 as a conference where Technology, Entertainment and Design converged — today it spans worldwide communities exploring science, business, education, arts and global issues.</p>
                  <p>Each year, thousands of independently run TEDx events bring people together to share ideas on every continent. Through the Audacious Project, TED has catalyzed more than $3 billion for world-changing projects.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: What is TEDx? */}
          <div className="w-screen h-full flex-shrink-0 bg-obsidian text-white flex flex-col justify-center px-6 md:px-12 pt-24">
            <div className="max-w-7xl w-full mx-auto">
              <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-3">What is TEDx?</h2>
              <h3 ref={panel2HeadingRef} className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-8 flex flex-wrap gap-x-4">
                {['x =', 'Independently', 'Organized'].map((word, i) => (
                  <span key={i} className={`reveal-word-2 inline-block ${word === 'Independently' || word === 'Organized' ? 'text-mask' : ''}`}>{word}</span>
                ))}
              </h3>
              <div className="border-t border-white/10 mt-8 pt-8 grid md:grid-cols-2 gap-12">
                <p className="text-base font-light leading-relaxed text-white/60">
                  In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks videos and live speakers combine to spark deep discussion and connection.
                </p>
                <p className="text-base font-light leading-relaxed text-white/60">
                  These local, self-organized events are branded TEDx, where <span className="font-medium text-white">x = independently organized TED event</span>. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized, subject to certain rules and regulations.
                </p>
              </div>
            </div>
          </div>

          {/* Panel 3: About TEDxKings Square Women */}
          <div className="w-screen h-full flex-shrink-0 bg-white text-obsidian flex flex-col justify-center px-6 md:px-12 pt-24">
            <div className="max-w-7xl w-full mx-auto">
              <h2 className="text-xs font-bold text-ted-red uppercase tracking-[0.5em] mb-3">About Us</h2>
              <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                TEDxKings <br /><span className="text-ted-red">Square Women</span>
              </h3>
              <div className="border-t border-obsidian/10 mt-8 pt-8 grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-5 text-base text-obsidian/60 font-light leading-relaxed">
                  <p>In Nigeria, women make up only <span className="font-medium text-obsidian">22% of STEM graduates</span> and scarcely <span className="font-medium text-obsidian">4–5% of the National Assembly</span>. These numbers compel urgency.</p>
                  <p>TEDxKings Square Women is designed to catalyze change and celebrate the voices of women — a movement for ideas worth spreading about women thriving beyond the norm.</p>
                </div>
                <div className="divide-y divide-obsidian/10">
                  {[
                    { stat: '22%', label: 'Women in STEM Graduates' },
                    { stat: '4–5%', label: 'Women in National Assembly' },
                    // { stat: 'Aug 29', label: 'Event Date · 2026 · Benin City' },
                  ].map(({ stat, label }) => (
                    <div key={stat} className="py-6">
                      <div className="text-5xl md:text-6xl font-black text-obsidian leading-none mb-2">{stat}</div>
                      <p className="text-sm text-obsidian/40 font-light">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TED → TEDx relationship badge — at the boundary between Panel 1 and Panel 2 */}
          <div
            className="absolute top-1/2 z-30 pointer-events-none"
            style={{ left: '100vw', transform: 'translate(-50%, -50%)' }}
          >
            <div className="ted-tedx-arrow w-20 h-20 rounded-full bg-ted-red flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          {/* Radar badge — at the boundary between panels 2 and 3, centered on screen mid-scroll */}
          <div
            className="absolute top-1/2 z-30 pointer-events-none"
            style={{ left: '200vw', transform: 'translate(-50%, -50%)' }}
          >
          <div className="boundary-disk rounded-full bg-obsidian p-3">
          <svg width="200" height="200" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="110" cy="110" r="106" stroke="white" strokeWidth="0.75" strokeOpacity="0.25"/>
            <circle cx="110" cy="110" r="80"  stroke="white" strokeWidth="0.5"  strokeOpacity="0.15"/>
            <circle cx="110" cy="110" r="54"  stroke="white" strokeWidth="0.5"  strokeOpacity="0.15"/>
            <circle cx="110" cy="110" r="32"  fill="#E62B1E"/>
            <line x1="110" y1="4"   x2="110" y2="78"  stroke="white" strokeWidth="0.5" strokeOpacity="0.25"/>
            <line x1="110" y1="142" x2="110" y2="216" stroke="white" strokeWidth="0.5" strokeOpacity="0.25"/>
            <line x1="4"   y1="110" x2="78"  y2="110" stroke="white" strokeWidth="0.5" strokeOpacity="0.25"/>
            <line x1="142" y1="110" x2="216" y2="110" stroke="white" strokeWidth="0.5" strokeOpacity="0.25"/>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 110 + 100 * Math.cos(rad);
              const y1 = 110 + 100 * Math.sin(rad);
              const x2 = 110 + 106 * Math.cos(rad);
              const y2 = 110 + 106 * Math.sin(rad);
              return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" strokeOpacity="0.3"/>;
            })}
            <text x="110" y="117" textAnchor="middle" fontFamily="inherit" fontWeight="900" fontSize="28" fill="white" letterSpacing="-1">x</text>
            <text x="110" y="26" textAnchor="middle" fontFamily="inherit" fontWeight="800" fontSize="11" fill="white" letterSpacing="3" opacity="0.9">TED</text>
            <path id="bottom-arc" d="M 18,110 A 92,92 0 0,0 202,110" fill="none"/>
            <text fontFamily="inherit" fontWeight="800" fontSize="11" fill="white" letterSpacing="1" opacity="0.9">
              <textPath href="#bottom-arc" startOffset="50%" textAnchor="middle">KINGS SQUARE WOMEN</textPath>
            </text>
            <circle cx="110" cy="198" r="2" fill="#E62B1E" opacity="0.9"/>
          </svg>
          </div>
          </div>

        </div>
      </div>

      {/* Objectives — card grid */}
      <section className="py-32 px-6 md:px-12 bg-obsidian border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Our Objectives</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              What We're <span className="text-mask">Here For</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {OBJECTIVES.map((obj, i) => {
              const isActive = activeObj === i;
              return (
                <div
                  key={i}
                  className="relative rounded-3xl overflow-hidden flex flex-col justify-between p-8 min-h-[580px] cursor-pointer"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={() => setActiveObj(i)}
                >
                  {/* Image — revealed only when active */}
                  <img
                    src={obj.image}
                    alt=""
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isActive ? 'opacity-100 scale-105 brightness-50' : 'opacity-0 scale-100 brightness-50'}`}
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                  {/* Border */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

                  {/* Arrow */}
                  <div className="relative z-10 flex justify-end">
                    <span className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'border-white/50 text-white' : 'border-white/20 text-white/60'}`}>
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </span>
                  </div>

                  {/* Text */}
                  <div className="relative z-10">
                    <h4 className="text-xl font-black uppercase tracking-tight text-white mb-3 leading-tight">{obj.title}</h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed line-clamp-2">{obj.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-32 px-6 md:px-12 bg-white border-b border-obsidian/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">The People</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none text-obsidian">
              Meet the <span className="text-ted-red">Team</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Osato Osagie', role: 'Lead Organizer', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' },
              { name: 'Elohor Efekemo', role: 'Curation Lead', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop' },
              { name: 'Chidinma Obi', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop' },
              { name: 'Adaeze Nwosu', role: 'Partnerships Lead', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
              { name: 'Blessing Aigbe', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop' },
              { name: 'Ivie Omoruyi', role: 'Speaker Coordinator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop' },
              { name: 'Kemi Adeyemi', role: 'Marketing Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' },
              { name: 'Ngozi Eze', role: 'Community Manager', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop' },
            ].map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-square rounded-2xl mb-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-base font-black uppercase tracking-tight text-obsidian leading-tight">{member.name}</h4>
                <p className="text-xs text-obsidian/40 font-light mt-1 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-6 md:px-12 bg-obsidian border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Got Questions?</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              Frequently <span className="text-mask">Asked</span>
            </h3>
          </div>
          <div className="divide-y divide-white/10 mb-12">
            {FAQS.slice(0, 5).map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
          <div className="flex items-center justify-between ">
            <p className="text-white/40 text-sm font-light">Have more questions?</p>
            <a
              href="/support"
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white hover:text-ted-red transition-colors"
            >
              Visit Support Center
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};
