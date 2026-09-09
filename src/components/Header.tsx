'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, CONTACT } from '@/lib/constants';
import Button from '@/components/ui/Button';
import { UserIcon, MenuIcon, XIcon } from '@/components/ui/Icons';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white/65 backdrop-blur-xl border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
          : 'bg-white border-neutral-100'
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link 
            href="/" 
            className="flex flex-col justify-center group transform transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]" 
            onClick={() => setIsOpen(false)}
          >
            <span className="text-lg md:text-xl font-bold text-brand-900 font-heading tracking-tight leading-tight">
              VizagFinServ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-block px-3 py-2 text-sm font-medium transition-all duration-300 group hover:-translate-y-0.5 ${
                    isActive ? 'text-brand-900 font-semibold' : 'text-neutral-700 hover:text-brand-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-1 left-3 right-3 h-[2px] bg-brand-800 rounded-full transition-transform duration-300 ease-out origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Controls */}
          <div className="flex items-center gap-3">
            {/* Desktop Only Actions (Login + Start a Conversation) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wealthelite.in/client-login"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-brand-900 rounded-full transition-all duration-300 group ${
                  isScrolled
                    ? 'bg-white border border-neutral-200/90 shadow-md shadow-brand-900/10 hover:border-brand-400 hover:shadow-lg'
                    : 'bg-transparent border-2 border-brand-200 hover:bg-brand-50 hover:border-brand-300 hover:shadow-sm'
                }`}
              >
                <UserIcon className="w-4 h-4 text-brand-900 group-hover:scale-110 transition-transform" />
                <span>Client Login</span>
              </a>

              <Button
                href="/contact"
                size="sm"
              >
                Start a Conversation
              </Button>
            </div>

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
            className="lg:hidden overflow-hidden bg-white border-t border-neutral-100 shadow-xl shadow-black/5"
          >
            <nav className="container-narrow py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        isActive ? 'text-brand-900 bg-brand-50/80 font-semibold' : 'text-neutral-700 hover:text-brand-800 hover:bg-brand-50/60'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* Mobile Auth & CTA */}
              <div className="pt-4 px-4 border-t border-neutral-100 mt-2 flex flex-col gap-3">
                <a
                  href="https://wealthelite.in/client-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-brand-900 bg-brand-50/50 hover:bg-brand-50 rounded-full transition-colors border border-brand-100"
                >
                  <UserIcon className="w-4 h-4" />
                  Client Login
                </a>
                <Button href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                  Start a Conversation
                </Button>
                <p className="mt-2 text-[11px] text-neutral-400 text-center">
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
