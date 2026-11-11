import Image from 'next/image';
import { ArrowUpRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Reveal from './Reveal';
import Section from './Section';
import { projects } from '../data/projects';

const isExternal = (href) => href.startsWith('http');

const externalProps = (href) =>
  isExternal(href) ? { target: '_blank', rel: 'noreferrer' } : {};

// Thumbnail, or a quiet typographic placeholder when the image isn't available.
const Thumb = ({ project, sizes, compact = false, className = '' }) => (
  <div
    className={`relative overflow-hidden border border-line bg-surface ${className}`}
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes={sizes}
        className="object-cover object-top transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
      />
    ) : (
      <div
        className={`flex h-full w-full items-end bg-accent-soft ${compact ? 'p-2.5' : 'p-6'}`}
      >
        <span
          className={`font-serif italic leading-tight text-accent ${compact ? 'text-sm' : 'text-2xl'}`}
        >
          {project.title}
        </span>
      </div>
    )}
  </div>
);

const ProjectLinks = ({ links }) => (
  <p className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
    {links.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        {...externalProps(href)}
        className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-accent"
      >
        {label}
        <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    ))}
  </p>
);

const FeaturedCard = ({ project }) => {
  const [primary] = project.links;
  return (
    <article className="group flex h-full flex-col">
      <a
        href={primary.href}
        {...externalProps(primary.href)}
        tabIndex={-1}
        aria-hidden="true"
      >
        <Thumb
          project={project}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[16/10] rounded-2xl"
        />
      </a>
      <h3 className="mt-6 font-serif text-2xl tracking-tight">
        <a
          href={primary.href}
          {...externalProps(primary.href)}
          className="transition-colors hover:text-accent"
        >
          {project.title}
        </a>
      </h3>
      <p className="mt-2 leading-relaxed text-muted">{project.description}</p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-5">
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
};

const CompactCard = ({ project }) => (
  <li className="group flex gap-5 py-6">
    <Thumb
      project={project}
      sizes="128px"
      compact
      className="hidden aspect-[16/10] w-32 flex-none rounded-lg sm:block"
    />
    <div className="min-w-0">
      <h4 className="font-serif text-xl tracking-tight">{project.title}</h4>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="text-xs text-muted">{project.tags.join(' · ')}</span>
        <ProjectLinks links={project.links} />
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
      index="04"
      label="Projects"
      title="Featured work"
      intro="Applications, machine learning experiments and data visualizations, most built during my studies and early career."
    >
      <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2">
        {featured.map((project, i) => (
          <li key={project.title}>
            <Reveal delay={(i % 2) * 90} className="h-full">
              <FeaturedCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>

      {more.length > 0 && (
        <Reveal className="mt-20">
          <details className="group/more border-y border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between py-6 [&::-webkit-details-marker]:hidden">
              <span className="font-serif text-2xl tracking-tight">
                More projects
                <span className="ml-3 align-middle text-sm text-muted">
                  {more.length}
                </span>
              </span>
              <ChevronDownIcon
                className="h-5 w-5 text-muted transition-transform group-open/more:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ul className="divide-y divide-line border-t border-line">
              {more.map((project) => (
                <CompactCard key={project.title} project={project} />
              ))}
            </ul>
          </details>
        </Reveal>
      )}
    </Section>
  );
};

export default Projects;
