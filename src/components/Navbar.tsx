'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Support', href: '/support' },
];

const MobileMenu = ({ onClose, onRegister }: { onClose: () => void; onRegister: () => void }) => (
  <motion.div
    className="fixed inset-0 z-[60] flex flex-col"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

    {/* Drawer */}
    <motion.div
      className="absolute right-0 top-0 bottom-0 w-[80vw] max-w-sm bg-obsidian border-l border-white/10 flex flex-col"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
        <a href="/" onClick={onClose}>
          <img src="/logo.png" alt="TEDxKings Square Women" className="h-8 w-auto brightness-0 invert" />
        </a>
        <button onClick={onClose} className="cursor-pointer text-white/40 hover:text-white transition-colors p-1">
          <X size={20} />
        </button>
      </div>

      {/* Links */}
      <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
        {NAV_LINKS.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-black uppercase tracking-tighter text-white/50 hover:text-white transition-colors py-3 border-b border-white/5 last:border-0"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          >
            {item.label}
          </motion.a>
        ))}
      </nav>

      {/* CTA */}
      <div className="px-8 pb-10">
        <motion.button
          onClick={() => { onClose(); onRegister(); }}
          className="w-full bg-ted-red text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-sm hover:bg-white hover:text-ted-red transition-all duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
        >
          Register Interest
        </motion.button>
        <p className="text-center text-[10px] text-white/20 uppercase tracking-widest mt-4">
          TEDx Kings Square Women · 2026
        </p>
      </div>
    </motion.div>
  </motion.div>
);

export const Navbar = ({ onRegister }: { onRegister?: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setScrolled(window.scrollY > heroHeight * 0.8);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
        {/* Announcement bar */}
        {bannerVisible && (
          <div className="pointer-events-auto w-full bg-ted-red text-white text-[11px] font-bold uppercase tracking-[0.3em] py-2 px-4 flex items-center justify-center gap-3 relative">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
            <Link href="https://calendar.app.google/iSrZBZLzkA7nWprD8" target="_blank" rel="noopener noreferrer">
              Virtual Pre-Event · May 2026 · Free &nbsp;—&nbsp; Add to calendar
            </Link>
            <button
              onClick={() => setBannerVisible(false)}
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
              aria-label="Close banner"
            >
              <X size={14} />
            </button>
          </div>
        )}

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
                      key={item.label}
                      href={item.href}
                      className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide uppercase"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={onRegister}
                    className="cursor-pointer bg-ted-red text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white hover:text-ted-red transition-all duration-300 uppercase tracking-widest"
                  >
                    Register
                  </button>
                </div>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="md:hidden text-white pointer-events-auto p-1"
                  aria-label="Open menu"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </motion.nav>
            ) : (
              <motion.nav
                key="pill"
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: isMobile ? 12 : 32, opacity: 1 }}
                exit={{ y: -60, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="pointer-events-auto relative flex items-center justify-between w-[92vw] lg:w-[50vw] px-5 lg:px-10 py-4 rounded-full bg-obsidian/80 backdrop-blur-md border border-white/10"
              >
                <a href="/" className="relative flex-shrink-0 block">
                  <img src="/logo.png" alt="TEDxKings Square Women" className="h-7 w-auto brightness-0 invert" />
                </a>

                <div className="hidden lg:flex items-center gap-1">
                  {NAV_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-xs font-semibold text-white/70 hover:text-white transition-colors tracking-wide uppercase px-2 py-1.5 rounded-full"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={onRegister}
                    className="cursor-pointer ml-2 bg-ted-red text-white px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity uppercase tracking-widest"
                  >
                    Register
                  </button>
                </div>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden text-white p-1"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            onClose={() => setMobileOpen(false)}
            onRegister={() => onRegister?.()}
          />
        )}
      </AnimatePresence>
    </>
  );
};
