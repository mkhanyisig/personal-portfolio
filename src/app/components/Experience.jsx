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
        <li key={job.organization}>
          <Reveal className="grid gap-2 border-t border-line py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
            <p className="label pt-2">{job.period}</p>
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <Logo src={job.logo} name={job.organization} size={30} />
                <h3 className="font-serif text-2xl">
                  <OrgName {...job} />
                </h3>
                <span className="text-sm text-muted">{job.role}</span>
              </div>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                {job.line}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>

    <Reveal className="grid gap-4 border-t border-line pt-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
      <p className="label pt-1">Before that</p>
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
    </Reveal>
  </Section>
);

export default Experience;
