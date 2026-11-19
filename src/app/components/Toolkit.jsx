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
          className="border-t border-line py-7"
        >
          <dt className="font-serif text-2xl">{title}</dt>
          <dd className="mt-2 leading-relaxed text-muted">{line}</dd>
          <dd className="tag mt-4 text-fg">{tools.join(' · ')}</dd>
        </Reveal>
      ))}
    </dl>
  </Section>
);

export default Toolkit;
