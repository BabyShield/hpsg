const entities = { amp: "&", quot: '"', apos: "'", nbsp: " ", lt: "<", gt: ">" };

// Decode once: text such as &amp;quot; must stay &quot;, as it does in the page.
export function normalise(value) {
  return value.replace(/&(?:#x([0-9a-f]+)|#(\d+)|(amp|quot|apos|nbsp|lt|gt));/gi, (_, hex, decimal, name) => {
    if (name) return entities[name.toLowerCase()];
    const point = parseInt(hex ?? decimal, hex ? 16 : 10);
    return point > 0 && point <= 0x10ffff && !(point >= 0xd800 && point <= 0xdfff)
      ? String.fromCodePoint(point) : "\ufffd";
  }).replace(/\s+/g, " ").trim();
}

// Plain text for auditing our generated HTML, never a sanitizer for rendering.
export function visibleText(html) {
  return normalise(html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script[^>]*>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " "));
}
