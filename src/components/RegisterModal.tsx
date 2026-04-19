'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const RegisterModal = ({ onClose }: { onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="relative bg-obsidian border border-white/10 rounded-3xl p-10 max-w-md w-full z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
      >
        <button onClick={onClose} className="cursor-pointer absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
          <X size={18} />
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-ted-red">Early Access</span>
              <h3 className="text-3xl font-black uppercase tracking-tighter mt-2 mb-2">Register Your Interest</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed mb-8">
                Tickets aren't on sale yet — drop your details below and we'll notify you the moment early bird tickets go live.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ted-red transition-colors"
                />
                <input
                  type="email"
                  placeholder="yourname@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ted-red transition-colors"
                />
                {error && <p className="text-xs text-ted-red">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="cursor-pointer w-full bg-ted-red hover:bg-ted-red/90 disabled:opacity-60 text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all text-sm"
                >
                  {loading ? 'Sending…' : 'Notify Me'}
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/50 mb-1 font-medium uppercase tracking-widest">Join our WhatsApp Community</p>
                <p className="text-xs text-white/30 font-light mb-4">Get real-time updates, speaker reveals, and exclusive behind-the-scenes content — straight to your phone.</p>
                <div className="flex flex-col gap-2 mb-4">
                  <a
                    href="https://chat.whatsapp.com/BpjkeQJOVHK7D3zacrlVGw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between border border-white/10 hover:bg-white/5 hover:border-white/20 text-white px-5 py-3 rounded-xl transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 flex-shrink-0">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.486a.5.5 0 0 0 .612.612l5.765-1.498A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.686-.528-5.208-1.44l-.374-.222-3.878 1.007 1.032-3.764-.243-.389A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-widest">WhatsApp Community</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                </div>
                <div className="flex gap-3 justify-center">
                  <a href="https://www.instagram.com/tedxkingssquarewomen?igsh=dmhpYnkwM3NhZ2dh&utm_source=qr" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://x.com/tedxkingssquare?s=21&t=YAcBV-XQa2PxoOXOOZomJw" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-ted-red/10 border border-ted-red/30 flex items-center justify-center mx-auto mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E62B1E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-3">You're on the list!</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                We'll email <span className="text-white font-medium">{form.email}</span> the moment early bird tickets go live.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
