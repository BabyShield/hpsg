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
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-gold" : "text-gold"}`}
        >
          {kicker}
        </p>
      ) : (
        <p className="mb-3 h-px w-12 bg-gold" aria-hidden="true" />
      )}
      <h2 className={`text-3xl sm:text-4xl ${light ? "text-bone" : "text-navy"}`}>{title}</h2>
      {text ? (
        <p className={`mt-4 text-base ${light ? "text-bone/80" : "text-grey-700"}`}>{text}</p>
      ) : null}
    </div>
  );
}
