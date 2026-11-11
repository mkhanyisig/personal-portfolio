import {
  ArrowsRightLeftIcon,
  ChartBarIcon,
  CircleStackIcon,
  FlagIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline';
import Reveal from './Reveal';
import Section from './Section';
import { competencies } from '../data/site';

const ICONS = {
  stack: Square3Stack3DIcon,
  chart: ChartBarIcon,
  integration: ArrowsRightLeftIcon,
  data: CircleStackIcon,
  flag: FlagIcon,
};

const Competencies = () => (
  <Section
    id="competencies"
    index="02"
    label="Focus"
    title="Breadth across the stack, depth where it counts."
  >
    <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {competencies.map(({ icon, title, body, wide }, i) => {
        const Icon = ICONS[icon];
        return (
          <li
            key={title}
            className={`bg-surface ${wide ? 'sm:col-span-2' : ''}`}
          >
            <Reveal
              delay={i * 70}
              className="group h-full p-7 transition-colors hover:bg-accent-soft sm:p-9"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl tracking-tight">
                {title}
              </h3>
              <p
                className={`mt-3 leading-relaxed text-muted ${wide ? 'max-w-3xl' : 'max-w-md'}`}
              >
                {body}
              </p>
            </Reveal>
          </li>
        );
      })}
    </ul>
  </Section>
);

export default Competencies;
