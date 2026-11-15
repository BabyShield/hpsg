// Four-area lead plan, 15 November 2026: ordinary links on existing pages only.
const AREA_NAMES: Readonly<Record<string, string>> = {
  hampstead: "Hampstead",
  "st-johns-wood": "St John's Wood",
  "primrose-hill": "Primrose Hill",
  highgate: "Highgate",
};

const SERVICES: Readonly<Record<string, { path: string; label: string }>> = {
  "kitchen-renovation": { path: "kitchen-renovation/", label: "kitchen renovation" },
  "bathroom-renovation": { path: "bathroom-renovation/", label: "bathroom renovation" },
  "light-refurbishment": { path: "house-refurbishment/", label: "house refurbishment" },
};

export function RenovationsNote({ area, service }: { area: string; service?: string }) {
  const name = AREA_NAMES[area];
  const match = service ? SERVICES[service] : { path: "", label: "renovations" };
  if (!name || !match) return null;

  return (
    <p data-renovations-link="">
      {service === "light-refurbishment" || !service ? "For wider renovation work, " : "For further reading, "}
      see Hampstead Renovations&apos; page on{" "}
      <a
        href={`https://www.hampsteadrenovations.co.uk/north-london/${area}/${match.path}`}
        className="quiet-link text-navy"
        rel="noopener"
      >
        {match.label} in {name}
      </a>
      .
    </p>
  );
}
