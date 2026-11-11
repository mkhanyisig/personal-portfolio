import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Reveal from './Reveal';
import Section from './Section';
import { featuredRoles, earlierRoles } from '../data/experience';

const OrgName = ({ organization, url }) =>
  url ? (
    <a href={url} target="_blank" rel="noreferrer" className="link">
      {organization}
    </a>
  ) : (
    organization
  );

const Experience = () => (
  <Section
    id="experience"
    index="03"
    label="Experience"
    title="Selected experience"
    intro="A few of the teams and problems that have shaped how I work."
  >
    <ol className="border-t border-line">
      {featuredRoles.map((job) => (
        <li key={job.organization} className="border-b border-line">
          <Reveal className="grid gap-4 py-9 md:grid-cols-[13rem_1fr] md:gap-10">
            <p className="text-sm tabular-nums text-muted md:pt-2">
              {job.period}
            </p>
            <div>
              <div className="flex items-center gap-4">
                <Logo src={job.logo} name={job.organization} />
                <h3 className="font-serif text-2xl tracking-tight">
                  <OrgName {...job} />
                  <span className="text-muted"> · {job.role}</span>
                </h3>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed">{job.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key themes">
                {job.themes.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>

    <Reveal className="mt-14 grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10">
      <p className="eyebrow pt-1">Earlier</p>
      <div>
        <ul className="grid gap-5 sm:grid-cols-3">
          {earlierRoles.map((job) => (
            <li key={job.organization} className="flex items-center gap-3">
              <Logo src={job.logo} name={job.organization} size={36} />
              <div className="text-sm leading-snug">
                <p className="font-medium">
                  <OrgName {...job} />
                </p>
                <p className="text-muted">{job.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted">
          Want more detail on any of these?{' '}
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
          >
            Get in touch
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </Reveal>
  </Section>
);

export default Experience;
