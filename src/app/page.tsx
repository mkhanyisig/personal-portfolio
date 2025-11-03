'use client';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import { useState } from 'react';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/Projects';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import CompetenciesSection from './components/CompetenciesSection';

export default function Home() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(true);
  const [key, setKey] = useState(0);

  const toggleBackgroundColor = () => {
    setIsBackgroundDark(!isBackgroundDark);
    setKey((prevKey) => prevKey + 1);
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
        <HeroSection isBackgroundDark={isBackgroundDark} forceUpdateKey={key} />
      </div>

      <div className="container mx-auto px-12 ">
        <AboutSection isBackgroundDark={isBackgroundDark} />
      </div>

      <div className="container mx-auto px-12">
        <CompetenciesSection isBackgroundDark={isBackgroundDark} />
      </div>

      <div className="container mx-auto px-12">
        <ProjectSection isBackgroundDark={isBackgroundDark} />
      </div>

      <div className="container mx-auto px-12">
        <EmailSection isBackgroundDark={isBackgroundDark} />
      </div>

      <Footer />
    </main>
  );
}
