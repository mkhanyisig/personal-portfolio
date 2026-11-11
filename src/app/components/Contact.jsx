import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Reveal from './Reveal';
import Section from './Section';
import { CALENDLY_URL, GITHUB_URL, LINKEDIN_URL } from '../data/site';

const Contact = () => (
  <Section id="contact" title="Say hello">
    <Reveal>
      <p className="max-w-xl text-lg leading-relaxed">
        Whether you have a question, want to connect, or just say hello, 
        I'm always happy to have a good conversation.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Get In Touch
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          <FaLinkedinIn className="h-3.5 w-3.5" aria-hidden="true" />
          LinkedIn
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
  </Section>
);

export default Contact;
