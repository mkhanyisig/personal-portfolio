import Image from 'next/image';
import Logo from './Logo';
import Reveal from './Reveal';
import Section from './Section';
import { education } from '../data/experience';

const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-12 md:grid-cols-[1fr_14rem] md:gap-14">
      <Reveal className="max-w-xl space-y-5 text-[17px] leading-relaxed">
        <p>
          I came to software through physics. I majored in astrophysics and
          computer science at Colby, then went on to a master&apos;s in computer
          science at Brandeis.
        </p>
        <p>
          These days I work across the stack, from product features to backend
          services, data pipelines and enterprise integrations. I like to
          understand how a system really works before I try to make it better.
        </p>
        <p className="text-muted">
          Away from the screen you&apos;ll find me at the gym, on the soccer
          field, on my bike or somewhere outdoors, usually with music on.
        </p>

        <ul className="space-y-3 border-t border-line pt-6">
          {education.map((school) => (
            <li key={school.organization} className="flex items-center gap-3">
              <Logo src={school.logo} name={school.organization} size={28} />
              <p className="text-sm">
                <span className="font-semibold">{school.organization}</span>
                <span className="text-muted">
                  {' '}
                  · {school.degree} · {school.year}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={120} className="max-w-[14rem]">
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <Image
            src="/images/grad.jpeg"
            alt="Mkhanyisi on stage at a graduation ceremony"
            fill
            sizes="224px"
            className="object-cover object-[72%_40%]"
          />
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;
