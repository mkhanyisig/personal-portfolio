'use client';
import NavBar from './components/NavBar';
import { useState } from 'react';

export default function Resume() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBackgroundDark(!isBackgroundDark);
  };

  return (
    <main
      className={`flex min-h-screen flex-col ${isBackgroundDark ? 'bg-[#121212]' : 'bg-white'}`}
    >
      <NavBar
        isBackgroundDark={isBackgroundDark}
        onBackgroundToggle={toggleBackgroundColor}
      />
      <div className="container mx-auto px-12 py-14">
        <p>Please Email me at: mkhanyisi [dot] g [at] gmail [dot] com</p>
      </div>
    </main>
  );
}
