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
        <p className={`kicker mb-5 ${light ? "text-gold" : ""}`}>{kicker}</p>
      ) : (
        <p className="rule mb-8" aria-hidden="true" />
      )}
      <h2 className={`font-display text-4xl font-normal sm:text-5xl ${light ? "text-bone" : "text-navy"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`lede mt-6 text-xl md:text-2xl ${light ? "text-bone/80" : "text-grey-600"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
