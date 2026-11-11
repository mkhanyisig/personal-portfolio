import Logo from './Logo';
import Reveal from './Reveal';
import Section from './Section';
import { education } from '../data/experience';

const Education = () => (
  <Section id="education" index="06" label="Education" title="Education">
    <ul className="grid gap-5 md:grid-cols-2">
      {education.map((school, i) => (
        <li key={school.organization}>
          <Reveal
            delay={i * 90}
            className="card flex h-full items-start gap-5 p-6 sm:p-7"
          >
            <Logo src={school.logo} name={school.organization} size={52} />
            <div>
              <h3 className="font-serif text-2xl tracking-tight">
                <a
                  href={school.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {school.organization}
                </a>
              </h3>
              <p className="mt-1 text-muted">{school.degree}</p>
              <p className="mt-3 text-sm tabular-nums text-muted">
                {school.year}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);

export default Education;
