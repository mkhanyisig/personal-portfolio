import Reveal from './Reveal';
import Section from './Section';
import { toolkit } from '../data/site';

const Toolkit = () => (
  <Section id="toolkit" title="What I work on">
    <dl className="grid gap-x-12 sm:grid-cols-2">
      {toolkit.map(({ title, line, tools }, i) => (
        <Reveal
          key={title}
          delay={(i % 2) * 80}
          className="border-t border-line py-6"
        >
          <dt className="font-serif text-2xl">{title}</dt>
          <dd className="mt-1 text-muted">{line}</dd>
          <dd className="mt-3 text-xs uppercase tracking-[0.14em] text-accent">
            {tools.join(' · ')}
          </dd>
        </Reveal>
      ))}
    </dl>
  </Section>
);

export default Toolkit;
