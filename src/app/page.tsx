import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competencies from './components/Competencies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Competencies />
        <Experience />
        <Projects />
        <Technologies />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
