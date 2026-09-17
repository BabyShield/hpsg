export function PageContents({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const visible = items.filter((item) => item.href && item.label);
  if (visible.length === 0) return null;

  return (
    <nav aria-label="On this page" className="mt-10 border-t border-grey-200 pt-8">
      <p className="caption mb-4">On this page</p>
      <ol className="flex flex-col gap-2 text-base">
        {visible.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="quiet-link text-navy">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
