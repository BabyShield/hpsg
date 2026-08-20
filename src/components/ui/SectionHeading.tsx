export function SectionHeading({
  kicker,
  title,
  text,
  light = false,
}: {
  kicker?: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p
          className={`mb-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.2em] ${
            light ? "text-gold" : "text-grey-500"
          }`}
        >
          {kicker}
        </p>
      ) : (
        <p className="mb-5 h-px w-12 bg-gold" aria-hidden="true" />
      )}
      <h2 className={`font-display text-4xl font-medium sm:text-5xl ${light ? "text-bone" : "text-navy"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-bone/75" : "text-grey-700"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
