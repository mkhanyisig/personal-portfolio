import Image from 'next/image';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Reveal from './Reveal';
import { GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Hero = () => (
  <section className="relative">
    <div className="container-page grid items-center gap-14 pb-16 pt-16 sm:pt-24 md:grid-cols-[1.35fr_1fr] md:gap-16 lg:pb-24 lg:pt-32">
      <Reveal>
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Full Stack Software Engineer
        </p>
        <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Mkhanyisi Gamedze
        </h1>
        <p className="mt-6 max-w-xl text-balance font-serif text-2xl italic leading-snug text-muted sm:text-[1.7rem]">
          I build scalable applications, data-driven systems, and intelligent
          solutions.
        </p>
        <p className="mt-6 max-w-xl leading-relaxed">
          I&apos;m a software engineer with experience building products across
          the stack, from intuitive web applications to backend services, data
          pipelines and machine learning solutions. I enjoy solving complex
          problems and turning technical ideas into reliable, practical systems.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="icon-link"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="icon-link"
          >
            <FaLinkedinIn className="h-[18px] w-[18px]" />
          </a>
        </div>
      </Reveal>

      <Reveal delay={120} className="mx-auto w-full max-w-sm md:max-w-none">
        <figure className="relative isolate">
          <div
            aria-hidden="true"
            className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-accent-soft"
          />
          <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
            <Image
              src="/images/mk3.png"
              alt="Portrait of Mkhanyisi Gamedze"
              width={502}
              height={497}
              priority
              sizes="(min-width: 768px) 400px, 90vw"
              className="h-auto w-full"
            />
          </div>
        </figure>
      </Reveal>
    </div>

    <div className="container-page">
      <a
        href="#about"
        className="group flex items-center gap-4 border-t border-line pt-5 text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
      >
        <ArrowDownIcon
          className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
          aria-hidden="true"
        />
        More about me
      </a>
    </div>
  </section>
);

export default Hero;
