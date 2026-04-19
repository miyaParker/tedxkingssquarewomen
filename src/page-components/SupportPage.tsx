'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const SocialLinks = () => (
  <div className="flex flex-wrap gap-4 mt-3">
    <a href="https://www.instagram.com/tedxkingssquarewomen?igsh=dmhpYnkwM3NhZ2dh&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">Instagram</a>
    <a href="https://x.com/tedxkingssquare?s=21&t=YAcBV-XQa2PxoOXOOZomJw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">X (Twitter)</a>
    <a href="https://chat.whatsapp.com/BpjkeQJOVHK7D3zacrlVGw" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-white/50 underline hover:text-ted-red transition-colors">WhatsApp</a>
  </div>
);

const FAQ_CATEGORIES: { id: string; label: string; faqs: { q: string; a: React.ReactNode }[] }[] = [
  {
    id: 'general',
    label: 'General',
    faqs: [
      {
        q: "What is TEDxKings Square Women?",
        a: <p>TEDxKings Square Women is an <span className="font-medium">independently organized TED event</span> that showcases women's voices, women-led innovations, and ideas worth spreading — through talks that inspire action and meaningful conversations.</p>,
      },
      {
        q: "How is a TEDx event different from a TED Conference?",
        a: <p>TED Conferences are organized and run directly by TED. TEDx events are <span className="font-medium">independently organized under a TED license</span>, following the TED format with the shared goal of spreading ideas worth spreading.</p>,
      },
      {
        q: "Why is it called TEDxKings Square Women?",
        a: <p><span className="font-medium">Kings Square</span> is the historic heart of Benin City — a central gathering place for community. We chose it as our name to root this movement in place, putting women's ideas at the very center of that stage.</p>,
      },
      {
        q: "Is this event only for women?",
        a: <>
          <p className="mb-3"><span className="font-medium">No!</span> This event is open to everyone. We welcome:</p>
          <ul className="space-y-1">
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
    ],
  },
  {
    id: 'attendance',
    label: 'Attendance',
    faqs: [
      {
        q: "Where will the event be held?",
        a: <>
          <p><span className="font-medium">Benin City, Edo State.</span> The exact venue will be announced soon. Stay tuned on our socials for the big reveal.</p>
          <SocialLinks />
        </>,
      },
      {
        q: "When is the event?",
        a: <>
          <p><span className="font-medium">August 29th, 2026.</span> Keep an eye on our social media pages for venue details, schedule updates, and announcements.</p>
          <SocialLinks />
        </>,
      },
      {
        q: "How can I attend the event?",
        a: <>
          <p>Tickets will be announced and made available through our website and official social media pages. <span className="font-medium">Early bird slots are limited</span> — register early to secure your spot.</p>
          <SocialLinks />
        </>,
      },
    ],
  },
  {
    id: 'speakers',
    label: 'Speakers',
    faqs: [
      {
        q: "I want to be a TEDxKings Square Women speaker. How do I apply?",
        a: <>
          <p>Watch our social media pages for the <span className="font-medium">Call for Speakers</span> announcement — that's where you'll find the application link and guidelines to be considered as a TEDx speaker.</p>
          <SocialLinks />
        </>,
      },
      {
        q: "What kind of talks are you looking for?",
        a: <>
          <p className="mb-3">We're looking for bold, original ideas. Some directions include:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Women breaking barriers in male-dominated fields</li>
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Reimagining leadership, community, or business</li>
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Creative expressions of identity, culture, and storytelling</li>
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Personal journeys of courage, innovation, and reinvention</li>
          </ul>
        </>,
      },
    ],
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    faqs: [
      {
        q: "How can I partner with TEDxKings Square Women?",
        a: <>
          <p>Reach out to us directly via email or our social media pages to explore partnership opportunities.</p>
          <a href="mailto:tedxkingssquarewomen@gmail.com" className="inline-block mt-3 text-sm font-bold text-ted-red underline hover:opacity-80 transition-opacity">
            tedxkingssquarewomen@gmail.com
          </a>
          <SocialLinks />
        </>,
      },
      {
        q: "What kind of partnerships do you offer?",
        a: <>
          <p className="mb-3">We welcome organizations and individuals who share our vision. Partnership opportunities include:</p>
          <ul className="space-y-1">
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Event sponsorships</li>
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Media & press partnerships</li>
            <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0"></span> Community collaborations</li>
          </ul>
          <p className="mt-3">Contact us to discuss how we can work together.</p>
        </>,
      },
    ],
  },
];

const FAQItem = ({ q, a, open, onToggle }: { q: string; a: React.ReactNode; open: boolean; onToggle: () => void }) => {
  return (
    <div className="border-b border-white/10 cursor-pointer group" onClick={onToggle}>
      <div className="flex justify-between items-center gap-8 py-6">
        <h4 className="text-base md:text-lg font-semibold group-hover:text-ted-red transition-colors">
          {q}
        </h4>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open ? 'border-ted-red' : 'border-white/20'}`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={open ? 'text-ted-red' : 'text-white/60'}>
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
            <div className="pb-6 text-white/50 font-light leading-relaxed text-sm md:text-base">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const SupportPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const active = FAQ_CATEGORIES.find(c => c.id === activeCategory)!;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
      <section className="pt-48 pb-24 px-6 md:px-12 border-b border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">resources</h2>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6">
            Support <span className="text-mask">Center</span>
          </h1>
          <p className="text-white/40 text-lg font-light">Have questions? We're here to help.</p>
        </motion.div>
      </section>

      {/* FAQ with sidebar */}
      <section className="py-24 px-6 md:px-12 border-b border-white/10">
        <motion.div
          layout
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto grid md:grid-cols-[220px_1fr] gap-16"
        >

          {/* Sidebar */}
          <div className="flex flex-row md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            <p className="hidden md:block text-[10px] text-white/30 uppercase tracking-widest mb-4">Categories</p>
            {FAQ_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`cursor-pointer text-left text-sm font-semibold uppercase tracking-widest py-2 whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'text-ted-red'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQs */}
          <div>
            <AnimatePresence mode="wait">
              <motion.h3
                key={activeCategory + '-title'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-10"
              >
                {active.label} <span className="text-white/20">Questions</span>
              </motion.h3>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
              {active.faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Contact form */}
      <section className="py-48 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-bold text-ted-red uppercase tracking-[0.5em] mb-4">Still need help?</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-4">
              Send us a <span className="text-mask">Message</span>
            </h3>
            <p className="text-white/40 font-light text-lg">
              Our team will get back to you shortly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-24 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-ted-red/10 border border-ted-red/30 flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-ted-red">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-2">Message Sent</h4>
                <p className="text-white/40 font-light">We'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-0">
                <div className="border border-white/10 rounded-2xl overflow-hidden divide-y divide-white/10">
                  <div className="flex items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 w-28 px-6 flex-shrink-0">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="flex-grow bg-transparent px-4 py-5 text-sm focus:outline-none placeholder:text-white/20"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 w-28 px-6 flex-shrink-0">Email</label>
                    <input
                      type="email"
                      placeholder="yourname@email.com"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="flex-grow bg-transparent px-4 py-5 text-sm focus:outline-none placeholder:text-white/20"
                    />
                  </div>
                  <div className="flex items-start">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 w-28 px-6 pt-5 flex-shrink-0">Message</label>
                    <textarea
                      placeholder="How can we help you?"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="flex-grow bg-transparent px-4 py-5 text-sm focus:outline-none placeholder:text-white/20 resize-none"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-6">
                  <a href="mailto:tedxkingssquarewomen@gmail.com" className="text-xs text-white/30 hover:text-white transition-colors underline">
                    tedxkingssquarewomen@gmail.com
                  </a>
                    <button
                      type="submit"
                      className="bg-ted-red text-white font-black uppercase tracking-widest px-8 py-4 rounded-full hover:opacity-90 transition-opacity text-sm flex items-center gap-3"
                    >
                      Send Message
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};
