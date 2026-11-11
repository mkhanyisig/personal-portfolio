import Reveal from './Reveal';

const Section = ({ id, index, label, title, intro, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className="py-20 sm:py-28">
    <div className="container-page">
      <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[13rem_1fr] md:gap-10">
        <p className="eyebrow pt-2">
          <span className="text-accent">{index}</span>
          <span className="mx-2 text-line">/</span>
          {label}
        </p>
        <div>
          <h2
            id={`${id}-title`}
            className="max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {intro && (
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{intro}</p>
          )}
        </div>
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
