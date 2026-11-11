import Reveal from './Reveal';
import Section from './Section';
import { technologies } from '../data/site';

const Technologies = () => (
  <Section
    id="technologies"
    index="05"
    label="Toolkit"
    title="Technologies I reach for"
    intro="Organized by what they're used for. These are the tools behind most of my recent work, not an exhaustive list."
  >
    <dl className="grid gap-x-10 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map(({ group, items }, i) => (
        <Reveal
          key={group}
          delay={(i % 3) * 70}
          className="border-b border-line py-7"
        >
          <dt className="text-sm font-semibold">{group}</dt>
          <dd className="mt-3">
            <ul className="flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </dd>
        </Reveal>
      ))}
    </dl>
  </Section>
);

export default Technologies;
