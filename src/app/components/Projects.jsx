import Image from 'next/image';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Reveal from './Reveal';
import Section from './Section';
import { projects } from '../data/projects';

const ext = (href) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};

// Black-and-white thumbnail that comes into colour on hover.
const Thumb = ({ image, title }) => (
  <div className="relative hidden h-24 w-36 flex-none overflow-hidden border border-line bg-surface sm:block">
    {image ? (
      <Image
        src={image}
        alt={`Screenshot of ${title}`}
        fill
        sizes="144px"
        className="object-cover object-top grayscale transition duration-500 group-hover:grayscale-0"
      />
    ) : (
      <span
        className="display flex h-full items-center justify-center px-2 text-center text-xl leading-none text-muted"
        aria-hidden="true"
      >
        {title}
      </span>
    )}
  </div>
);

const ProjectRow = ({ title, line, tags, image, links }) => (
  <li className="group flex gap-6 border-t border-line py-6">
    <Thumb image={image} title={title} />
    <div className="min-w-0 flex-1">
      <h3 className="font-serif text-2xl">
        <a
          href={links[0].href}
          {...ext(links[0].href)}
          className="transition-opacity hover:opacity-75"
        >
          {title}
        </a>
      </h3>
      <p className="mt-1 max-w-xl leading-relaxed text-muted">{line}</p>
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <span className="tag">{tags.join(' · ')}</span>
        <span className="flex gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              {...ext(href)}
              className="label inline-flex items-center gap-1 text-fg transition-opacity hover:opacity-75"
            >
              {label}
              <ArrowUpRightIcon className="h-3 w-3" aria-hidden="true" />
            </a>
          ))}
        </span>
      </div>
    </div>
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
          <summary className="label flex cursor-pointer list-none items-center gap-2 py-5 transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
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
