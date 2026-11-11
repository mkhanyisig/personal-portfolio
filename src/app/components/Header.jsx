'use client';
import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';
import { nav } from '../data/site';

const Header = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header-glass sticky top-0 z-30 border-b border-line">
      <div className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={close}
          className="font-serif text-xl tracking-tight transition-colors hover:text-accent"
        >
          Mkhanyisi Gamedze
        </a>

        <nav aria-label="Primary" className="flex items-center gap-1">
          <ul className="mr-2 hidden items-center gap-7 text-sm md:flex">
            {nav.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted transition-colors hover:text-fg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2 text-muted hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars2Icon className="h-5 w-5" />
            )}
          </button>
        </nav>
      </div>

      {open && (
        <ul
          id="mobile-nav"
          className="container-page flex flex-col border-t border-line py-3 md:hidden"
        >
          {nav.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={close}
                className="block py-3 font-serif text-2xl transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
