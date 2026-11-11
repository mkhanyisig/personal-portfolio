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
          I'm a software engineer with experience spanning full-stack development, backend systems, 
          data engineering, applied machine learning, and cloud-based enterprise integrations. 
          I hold a master's in Computer Science from Brandeis University and a bachelor's 
          from Colby College.
        </p>
        <p>
          I've worked across small, early-stage teams building products from the ground up, as well 
          as established environments modernizing and integrating complex enterprise systems. 
          My experience ranges from taking features and new products from concept to production 
          to improving the scalability, reliability, and maintainability of existing systems.
        </p>
        <p>
          I'm naturally curious about how things work and enjoy tackling complex problems, whether 
          that means designing something new or finding better ways to build on what's already there.
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
