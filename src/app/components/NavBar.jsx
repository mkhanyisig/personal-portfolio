import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const NavLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const NavBar = ({ isBackgroundDark, onBackgroundToggle }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const bgColor = isBackgroundDark ? 'bg-[#121212]' : 'bg-white';
  const navOptionsColor = isBackgroundDark
    ? ' text-slate-200 hover:text-white hover:border-white'
    : ' text-zinc-800 hover:text-slate-950 hover:border-slate-950';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 ${bgColor} bg-opacity-90 `}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={'/'}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          {/* Add title here */}
        </Link>

        <div className="flex items-center ml-auto ">
          <button
            className={`flex items-center px-3 py-2 border rounded ${navOptionsColor}`}
            onClick={onBackgroundToggle}
          >
            {isBackgroundDark ? (
              <SunIcon className="h-6 w-6 hover:text-yellow-600 fill-current" />
            ) : (
              <MoonIcon className="h-6 w-6 text-zinc-500 hover:text-zinc-800 fill-current" />
            )}
          </button>

          <div className="hidden md:block ml-4">
            <ul className="flex space-x-8">
              {NavLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    colorOptions={navOptionsColor}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-menu block md:hidden ml-4">
            {!navbarOpen ? (
              <button
                id="nav-toggle"
                className={`flex items-center px-3 py-2 border rounded ${navOptionsColor}`}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <Bars3Icon className="h-6 w-6"></Bars3Icon>
              </button>
            ) : (
              <button
                id="nav-toggle"
                className={`flex items-center px-3 py-2 border rounded ${navOptionsColor}`}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <XMarkIcon className="h-6 w-6"></XMarkIcon>
              </button>
            )}
          </div>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  );
};

export default NavBar;
