import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Speakers', href: '/#speakers' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Partners', href: '/#partners' },
  { label: 'Support', href: '/support' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
      {/* Announcement bar */}
      <a
        href="/events"
        className="pointer-events-auto w-full bg-ted-red text-white text-center text-[11px] font-bold uppercase tracking-[0.3em] py-2 px-4 hover:bg-white hover:text-ted-red transition-colors duration-300 flex items-center justify-center gap-3"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
        Virtual Pre-Event · May 2026 · Free &nbsp;—&nbsp; Register Now
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
      <div className="flex justify-center pointer-events-none w-full">
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <motion.nav
            key="full"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto w-full flex justify-between items-center px-6 py-8 md:px-12"
          >
            <a href="/" className="relative block">
              <img src="/logo.png" alt="TEDxKings Square Women" className="h-10 w-auto brightness-0 invert" />
              <span className="absolute top-full left-0 text-[9px] text-white/40 uppercase tracking-widest whitespace-nowrap">x = independently organized TED event</span>
            </a>

            <div className="hidden md:flex gap-8 items-center">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={item.href}
                  className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide uppercase"
                >
                  {item.label}
                </a>
              ))}
              <button className="bg-ted-red text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-ted-red transition-all duration-300 uppercase tracking-widest">
                Register
              </button>
            </div>

            <button className="md:hidden text-white pointer-events-auto">
              <Menu className="w-6 h-6" />
            </button>
          </motion.nav>
        ) : (
          <motion.nav
            key="pill"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 32, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto relative flex items-center justify-between w-[50vw] px-10 py-4 rounded-full bg-obsidian/80 backdrop-blur-md border border-white/10"
          >
            <a href="/" className="relative flex-shrink-0 block">
              <img src="/logo.png" alt="TEDxKings Square Women" className="h-7 w-auto brightness-0 invert" />
              {/* <span className="absolute top-full left-0 mt-0.5 text-[8px] text-white/40 uppercase tracking-widest whitespace-nowrap">x = independently organized TED event</span> */}
            </a>
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={item.href}
                  className="text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase px-2 py-1.5 rounded-full"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                className="ml-2 bg-ted-red text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity uppercase tracking-widest"
              >
                Register
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
};
