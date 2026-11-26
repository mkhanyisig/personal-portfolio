import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import Reveal from './Reveal';
import Section from './Section';
import { roles, earlier } from '../data/experience';

const OrgName = ({ organization, url }) =>
  url ? (
    <a href={url} target="_blank" rel="noreferrer" className="link">
      {organization}
    </a>
  ) : (
    organization
  );

const Experience = () => (
  <Section id="work" title="Work">
    <ol>
      {roles.map((job) => (
        <li key={job.organization || job.role}>
          <Reveal className="grid gap-2 border-t border-line py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <p className="label pt-2">{job.period}</p>
            <div>
              {job.organization ? (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <Logo src={job.logo} name={job.organization} size={30} fill={job.logoFit !== 'contain'} />
                  <h3 className="font-serif text-2xl">
                    <OrgName {...job} />
                  </h3>
                  <span className="text-sm text-muted">{job.role}</span>
                </div>
              ) : (
                <h3 className="font-serif text-2xl">{job.role}</h3>
              )}
              {job.line && (
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {job.line}
                </p>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>

    {/* Earlier roles, collapsed by default to keep the section concise. */}
    <Reveal className="border-t border-line">
      <details className="group/earlier">
        <summary className="grid cursor-pointer list-none gap-2 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8 [&::-webkit-details-marker]:hidden">
          <span className="label flex items-center gap-2 pt-0.5 transition-colors group-hover/earlier:text-fg">
            Before that
            <ChevronDownIcon
              className="h-3.5 w-3.5 transition-transform duration-300 group-open/earlier:rotate-180"
              aria-hidden="true"
            />
          </span>
          <span className="text-sm text-muted group-open/earlier:hidden">
            {earlier.map((job) => job.organization).join(' · ')}
          </span>
        </summary>
        <div className="grid pb-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <span className="hidden sm:block" aria-hidden="true" />
          <div>
            <ul className="space-y-4">
              {earlier.map((job) => (
                <li key={job.organization} className="text-sm leading-relaxed">
                  <p>
                    <span className="font-semibold">
                      <OrgName {...job} />
                    </span>
                    <span className="text-muted">
                      {' '}
                      · {job.role} · {job.period}
                    </span>
                  </p>
                  <p className="text-muted">{job.line}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Want more detail?{' '}
              <a href="#contact" className="link text-fg">
                Get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </details>
    </Reveal>
  </Section>
);

export default Experience;
