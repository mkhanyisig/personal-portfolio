import Reveal from './Reveal';

const Section = ({ id, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="py-16 sm:py-24">
    <div className="container-page">
      <Reveal className="mb-10">
        <div className="flex items-center gap-5">
          <h2 id={`${id}-title`} className="display text-5xl sm:text-6xl">
            {title}
          </h2>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
          <span className="text-muted" aria-hidden="true">
            ✦
          </span>
        </div>
        {intro && (
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{intro}</p>
        )}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
