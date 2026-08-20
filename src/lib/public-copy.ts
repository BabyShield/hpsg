/** Strip internal tokens so unfinished facts do not appear on the public site. */
export function publicCopy(text: string): string {
  return text
    .replace(/\[INSURANCE_TBC\]/g, "")
    .replace(/\[TBC:[^\]]*\]/g, "")
    .replace(/\[VERIFY[^\]]*\]/g, "")
    .replace(/\[REVIEW:[^\]]*\]/g, "")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ +\./g, ".")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function isDraftToken(text: string): boolean {
  return /^\s*\[(TBC|VERIFY|INSURANCE_TBC|REVIEW)/i.test(text);
}
