import Image from 'next/image';
import Logo from './Logo';
import Reveal from './Reveal';
import Section from './Section';
import { education } from '../data/experience';

const About = () => (
  <Section id="about" title="About">
    <div className="grid gap-12 md:grid-cols-[1fr_15rem] md:gap-14">
      <Reveal className="max-w-2xl space-y-5 text-[17px] leading-relaxed">
        <p>
          I came to software through physics. I majored in astrophysics and
          computer science at Colby College, then went on to a master&apos;s in
          computer science at Brandeis, where I also worked as a graduate
          research assistant.
        </p>
        <p>
          Since then I&apos;ve worked on product-focused teams across web
          development, backend systems, analytics and applied machine learning,
          and more recently on enterprise integrations in the cloud. My core
          languages are Python, TypeScript/JavaScript and Java.
        </p>
        <p>
          I like to understand how a system really works before I try to make it
          better, and I care about software that is maintainable, reliable and
          thoughtfully designed.
        </p>
        <p className="text-muted">
          Away from the screen you&apos;ll find me at the gym, on the soccer
          field, on my bike or somewhere outdoors, usually with music on.
          Sports, travel and a good hike are what recharge me.
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

      <Reveal delay={120} className="max-w-[15rem]">
        <div className="relative aspect-[4/5] overflow-hidden border border-line">
          <Image
            src="/images/grad.jpeg"
            alt="Mkhanyisi on stage at a graduation ceremony"
            fill
            sizes="240px"
            className="object-cover object-[72%_40%]"
          />
        </div>
      </Reveal>
    </div>
  </Section>
);

export default About;
