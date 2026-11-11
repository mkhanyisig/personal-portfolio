import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from './Reveal';
import Section from './Section';
import { projects } from '../data/projects';

const ext = (href) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};

const Thumb = ({ image }) => (
  <div className="relative hidden h-12 w-20 flex-none overflow-hidden border border-line bg-surface sm:block">
    {image ? (
      <Image
        src={image}
        alt=""
        fill
        sizes="80px"
        className="object-cover object-top opacity-90 sepia-[.3] transition duration-300 group-hover:opacity-100 group-hover:sepia-0"
      />
    ) : (
      <span
        className="flex h-full items-center justify-center text-accent"
        aria-hidden="true"
      >
        ✦
      </span>
    )}
  </div>
);

const ProjectRow = ({ title, line, image, links }) => (
  <li className="group flex items-center gap-5 border-t border-line py-5">
    <Thumb image={image} />
    <div className="min-w-0 flex-1">
      <h3 className="font-serif text-xl">
        <a
          href={links[0].href}
          {...ext(links[0].href)}
          className="transition-colors hover:text-accent"
        >
          {title}
        </a>
      </h3>
      <p className="mt-0.5 text-sm text-muted">{line}</p>
    </div>
    <p className="hidden flex-none gap-4 sm:flex">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          {...ext(href)}
          className="label inline-flex items-center gap-1 transition-colors hover:text-accent"
        >
          {label}
          <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
        </a>
      ))}
    </p>
  </li>
);

const Projects = () => {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <Section
      id="projects"
      title="Projects"
      intro="Mostly from my college and early-career days. A bit dated now, but they're where a lot of it started."
    >
      <Reveal>
        <ul>
          {featured.map((p) => (
            <ProjectRow key={p.title} {...p} />
          ))}
        </ul>
        <details className="group/more border-t border-line">
          <summary className="label flex cursor-pointer list-none items-center gap-2 py-5 transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="transition-transform group-open/more:rotate-90">
              ›
            </span>
            A few more ({more.length})
          </summary>
          <ul>
            {more.map((p) => (
              <ProjectRow key={p.title} {...p} />
            ))}
          </ul>
        </details>
      </Reveal>
    </Section>
  );
};

export default Projects;
