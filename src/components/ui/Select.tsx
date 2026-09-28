'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder?: string;
  invalid?: boolean;
  /** id of the element labelling this control. */
  labelledBy?: string;
  describedBy?: string;
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export default function Select({
  value,
  onChange,
  options,
  placeholder = 'Select one...',
  invalid = false,
  labelledBy,
  describedBy,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  // Which option the keyboard is sitting on, which is not the same as the
  // chosen one until Enter is pressed.
  const [activeIndex, setActiveIndex] = useState(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const baseId = useId();

  const selectedIndex = options.indexOf(value);

  const openList = () => {
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setOpen(true);
  };

  const close = (refocus = true) => {
    setOpen(false);
    if (refocus) buttonRef.current?.focus();
  };

  const choose = (index: number) => {
    const next = options[index];
    if (next !== undefined) onChange(next);
    close();
  };

  // Pointer outside, or a scroll/resize that would leave the panel stranded.
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  // Keep the highlighted row in view when arrowing through a long list.
  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    node?.scrollIntoView({ block: 'nearest' });
  }, [open, activeIndex]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) openList();
        else setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) openList();
        else setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Home':
        if (open) {
          e.preventDefault();
          setActiveIndex(0);
        }
        break;
      case 'End':
        if (open) {
          e.preventDefault();
          setActiveIndex(options.length - 1);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open) choose(activeIndex);
        else openList();
        break;
      case 'Escape':
        if (open) {
          e.preventDefault();
          close();
        }
        break;
      case 'Tab':
        if (open) setOpen(false);
        break;
    }
  };

  const border = invalid
    ? 'border-[#B42318] focus:border-[#B42318] focus:ring-1 focus:ring-[#B42318]'
    : open
      ? 'border-brand-600 ring-1 ring-brand-600'
      : 'border-neutral-200 hover:border-brand-300 focus:border-brand-600 focus:ring-1 focus:ring-brand-600';

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? `${baseId}-list` : undefined}
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
        aria-invalid={invalid || undefined}
        onClick={() => (open ? close(false) : openList())}
        onKeyDown={onKeyDown}
        className={`w-full flex items-center justify-between gap-3 rounded-lg border bg-white px-4 py-3 text-left text-base outline-none transition-[border-color,box-shadow] duration-200 cursor-pointer ${border} ${
          value ? 'text-brand-900' : 'text-neutral-400'
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
        <svg
          aria-hidden="true"
          className={`shrink-0 w-4 h-4 text-brand-800 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            id={`${baseId}-list`}
            role="listbox"
            aria-labelledby={labelledBy}
            aria-activedescendant={`${baseId}-opt-${activeIndex}`}
            tabIndex={-1}
            onKeyDown={onKeyDown}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
            className="absolute z-20 mt-2 w-full max-h-64 overflow-auto rounded-xl border border-neutral-200 bg-white py-1.5 shadow-card-lg"
          >
            {options.map((option, i) => {
              const isSelected = option === value;
              const isActive = i === activeIndex;
              return (
                <li
                  key={option}
                  id={`${baseId}-opt-${i}`}
                  role="option"
                  aria-selected={isSelected}
                  onPointerEnter={() => setActiveIndex(i)}
                  onClick={() => choose(i)}
                  className={`flex items-center justify-between gap-3 px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                    isActive ? 'bg-brand-50' : ''
                  } ${isSelected ? 'text-brand-900 font-semibold' : 'text-neutral-700'}`}
                >
                  <span>{option}</span>
                  {isSelected && (
                    <svg
                      aria-hidden="true"
                      className="shrink-0 w-4 h-4 text-gold-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
