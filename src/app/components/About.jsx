import Image from 'next/image';
import Reveal from './Reveal';
import Section from './Section';

const About = () => (
  <Section
    id="about"
    index="01"
    label="About"
    title="Curious about how systems work, and how to make them work better."
  >
    <div className="grid gap-12 md:grid-cols-[13rem_1fr] md:gap-10">
      <div className="hidden md:block" />
      <div className="grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
        <Reveal className="max-w-2xl space-y-5 text-[17px] leading-relaxed">
          <p>
            I studied computer science and physics at Colby College, then
            completed a master&apos;s in computer science at Brandeis. Moving
            between astrophysics and software taught me to enjoy the part where
            you first understand how something works, then figure out how to
            make it better.
          </p>
          <p>
            Since then I&apos;ve worked on product-focused teams across backend
            development, analytics and applied machine learning: shipping
            features, building data pipelines and turning models into tools
            people use day to day.
          </p>
          <p>
            I care about software that is maintainable, reliable and
            thoughtfully designed, and I&apos;m always learning, whether
            that&apos;s a new framework or a better way to frame a problem.
          </p>
          <p className="text-muted">
            Away from the screen you&apos;ll find me at the gym, on the soccer
            field, on my bike or somewhere outdoors, usually with music on.
          </p>
        </Reveal>

        <Reveal delay={120} className="max-w-xs lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/grad.jpeg"
              alt="Mkhanyisi on stage at a graduation ceremony"
              fill
              sizes="(min-width: 1024px) 272px, (min-width: 768px) 60vw, 90vw"
              className="object-cover object-[72%_40%]"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </Section>
);

export default About;
