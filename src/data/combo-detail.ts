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
export type ComboFailure = {
  title: string;
  text: string;
};

export type ComboDetail = {
  /** 2 paragraphs: what a typical instruction covers here, and what it excludes. */
  scopeNotes: string[];
  /** 1 paragraph: how the standard sequence actually runs in this area. */
  processNote: string;
  /** 1 paragraph: conservation, tenure and consent for THIS service here. */
  consent: string;
  /** Who this service in THIS area is for — unique, not a renamed hub paragraph. */
  audience?: string[];
  /** Four constraints that decide whether the job here actually works. */
  failures?: ComboFailure[];
  /** Additional hand-written questions, merged after the existing localFaqs. */
  extraFaqs: Faq[];
};

export type ComboDetailMap = Record<string, ComboDetail>;
