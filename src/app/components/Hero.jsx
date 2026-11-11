import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Reveal from './Reveal';
import ScrollCue from './ScrollCue';
import { GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Hero = () => (
  <section className="screen relative flex flex-col justify-center overflow-hidden">
    {/* Slow-drifting smoke behind the hero (dark theme only; it bands on light). */}
    <div
      aria-hidden="true"
      className="smoke pointer-events-none absolute hidden dark:block -right-1/4 -top-1/3 -z-10 h-[140%] w-[90%] rounded-full opacity-80 blur-3xl"
      style={{
        background:
          'radial-gradient(closest-side, var(--haze), color-mix(in srgb, var(--haze) 50%, transparent) 40%, color-mix(in srgb, var(--haze) 20%, transparent) 65%, transparent 85%)',
      }}
    />

    <div className="container-page grid items-center gap-10 pb-16 pt-16 sm:pt-20 md:grid-cols-[1.3fr_1fr] md:gap-12 md:pb-24">
      <Reveal>
        <p className="label flex items-center gap-3">
          <span aria-hidden="true">✦</span>
          Software Engineer
        </p>
        <p className="mt-8 font-serif text-2xl italic text-muted">
          Hello there, I&apos;m
        </p>
        <h1 className="display mt-1 text-[5.5rem] leading-[0.85] sm:text-[8rem] lg:text-[9.5rem]">
          Mkhanyisi
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed">
          I&apos;m a full stack software engineer. I build web apps, backend
          services, data pipelines and the occasional machine learning model,
          and I enjoy the puzzle of making complicated systems feel simple.
        </p>
        <p className="mt-4 max-w-lg italic text-muted">
          Welcome to my little corner of the internet. Whether you&apos;re here
          to explore or just curious, feel free to reach out.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a href="#contact" className="btn-primary">
            Say hello
          </a>
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

      <Reveal delay={150} className="relative mx-auto w-full max-w-[20rem]">
        {/* Backlit portrait that fades into the dark, like a figure in smoke. */}
        <div
          aria-hidden="true"
          className="backlight absolute inset-x-[-15%] top-[-8%] h-[95%]"
        />
        <Image
          src="/images/mk3.png"
          alt="Portrait of Mkhanyisi Gamedze"
          width={502}
          height={497}
          priority
          sizes="(min-width: 768px) 320px, 80vw"
          className="relative h-auto w-full contrast-125 grayscale"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, black 62%, transparent 98%)',
            maskImage: 'linear-gradient(to bottom, black 62%, transparent 98%)',
          }}
        />
      </Reveal>
    </div>
    <ScrollCue href="#about" label="Scroll to about" />
  </section>
);

export default Hero;
