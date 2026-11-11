import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Reveal from './Reveal';
import { CALENDLY_URL, GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Contact = () => (
  <section
    id="contact"
    aria-labelledby="contact-title"
    className="py-20 sm:py-28"
  >
    <div className="container-page">
      <Reveal className="card relative overflow-hidden px-6 py-14 sm:px-14 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft"
        />
        <p className="eyebrow">
          <span className="text-accent">07</span>
          <span className="mx-2 text-line">/</span>
          Contact
        </p>
        <h2
          id="contact-title"
          className="mt-6 max-w-2xl text-balance font-serif text-4xl leading-tight tracking-tight sm:text-5xl"
        >
          Let&apos;s talk.
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-muted">
          My inbox is always open. If you&apos;d like more detail on my
          experience, have a role in mind or just want to say hi, I&apos;ll get
          back to you.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Book a call
            <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
            Message on LinkedIn
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
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
