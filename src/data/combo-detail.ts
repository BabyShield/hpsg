import type { Faq } from "./types";

/**
 * Per-area detail layered onto ComboContent by combo-content.ts.
 *
 * These fields exist to remove sitewide repetition: before them, every combo
 * page rendered the service-wide included[] list, the full processStep bodies,
 * and the area's conservationNotes/localNotes verbatim — blocks that also
 * appear on the service hub and the area hub. Each field below is written for
 * one service in one area and appears on exactly one page.
 */
export type ComboDetail = {
  /** 2 paragraphs: what a typical instruction covers here, and what it excludes. */
  scopeNotes: string[];
  /** 1 paragraph: how the standard sequence actually runs in this area. */
  processNote: string;
  /** 1 paragraph: conservation, tenure and consent for THIS service here. */
  consent: string;
  /** Additional hand-written questions, merged after the existing localFaqs. */
  extraFaqs: Faq[];
};

export type ComboDetailMap = Record<string, ComboDetail>;
