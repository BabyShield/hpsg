/** Withhold an entire unfinished statement, not just its internal warning. */
export function publicCopy(text: string): string {
  if (/\[(?:VERIFY|TBC|REVIEW)(?:\b|:)/i.test(text)) return "";
  return text
    .replace(/\[INSURANCE_TBC\]/g, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ +\./g, ".")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function isDraftToken(text: string): boolean {
  return /\[(TBC|VERIFY|INSURANCE_TBC|REVIEW)(?:\b|:)/i.test(text);
}
