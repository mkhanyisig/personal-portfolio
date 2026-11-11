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
          <Reveal className="grid gap-2 border-t border-line py-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
            <p className="label pt-1.5">{job.period}</p>
            <div>
              <div className="flex items-center gap-3">
                <Logo src={job.logo} name={job.organization} size={28} />
                <h3 className="font-serif text-2xl">
                  <OrgName {...job} />
                </h3>
                <span className="text-sm text-muted">{job.role}</span>
              </div>
              <p className="mt-2 max-w-xl text-muted">{job.line}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>

    <Reveal className="grid gap-2 border-t border-line pt-6 sm:grid-cols-[8rem_1fr] sm:gap-8">
      <p className="label pt-0.5">Before that</p>
      <p className="text-muted">
        {earlier.map((org, i) => (
          <span key={org.organization}>
            <OrgName {...org} />
            {org.note && ` (${org.note})`}
            {i < earlier.length - 1 && ', '}
          </span>
        ))}
        .{' '}
        <a href="#contact" className="text-accent hover:underline">
          Happy to tell you more.
        </a>
      </p>
    </Reveal>
  </Section>
);

export default Experience;
