import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Constellation from './Constellation';
import Reveal from './Reveal';
import { GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Hero = () => (
  <section className="relative overflow-hidden">
    <div className="container-page grid items-center gap-12 pb-20 pt-16 sm:pt-24 md:grid-cols-[1.4fr_1fr] md:gap-14 md:pb-28">
      <Reveal>
        <p className="label flex items-center gap-3">
          <span className="text-accent" aria-hidden="true">
            ✦
          </span>
          Software Engineer
        </p>
        <p className="mt-8 font-serif text-2xl italic text-muted">
          Hello there, I&apos;m
        </p>
        <h1 className="display mt-3 text-[2.6rem] leading-none sm:text-6xl lg:text-7xl">
          Mkhanyisi
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed">
          I build web apps, backend services and data tools, and I enjoy the
          puzzle of making complicated systems feel simple.
        </p>
        <p className="mt-3 max-w-md italic text-muted">
          Welcome to my little corner of the internet.
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

      <Reveal delay={150} className="relative mx-auto w-full max-w-[17rem]">
        <Constellation className="absolute -right-10 -top-16 hidden w-48 md:block" />
        {/* Double brass rule around the portrait, like an old frame. */}
        <div className="relative border border-accent p-2">
          <div className="border border-line">
            <Image
              src="/images/mk3.png"
              alt="Portrait of Mkhanyisi Gamedze"
              width={502}
              height={497}
              priority
              sizes="(min-width: 768px) 272px, 70vw"
              className="h-auto w-full sepia-[.35]"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Hero;
