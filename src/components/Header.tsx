'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { MenuIcon, XIcon } from '@/components/ui/Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-neutral-100 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex flex-col justify-center group" onClick={() => setIsOpen(false)}>
            <span className="text-lg md:text-xl font-bold text-brand-900 font-heading tracking-tight leading-tight">
              VizagFinServ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-700 hover:text-brand-800 transition-colors duration-200 rounded-md hover:bg-brand-50/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Controls */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              size="sm"
              className="hidden md:inline-flex"
            >
              Start a Conversation
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-brand-900 hover:bg-brand-50 rounded-lg transition-colors cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-neutral-700 hover:text-brand-800 hover:bg-brand-50/60 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 px-4 border-t border-neutral-100 mt-2">
                <Button href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                  Start a Conversation
                </Button>
                <p className="mt-3 text-[11px] text-neutral-400 text-center">
                  {CONTACT.arn} | {CONTACT.euin}
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
