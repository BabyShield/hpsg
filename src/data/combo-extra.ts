import type { Faq } from "./types";

/**
 * The second per-area layer, folded into ComboContent by combo-content.ts.
 *
 * combo-detail.ts answers "who is this for, what is in scope, what must be
 * right". This layer answers the questions a reader asks next and that no
 * other page on the site can answer for them: what a visit actually settles,
 * what the materials are in this fabric, how the weeks run, how the van gets
 * to the door, what moves the figure, what it is like to live through, and
 * what happens after the last day.
 *
 * Every field below is written for one service in one area. Nothing here is
 * templated, because the point of the layer is that sixty pages stop reading
 * as one page with the place name swapped.
 */
export type ComboExtraItem = {
  title: string;
  text: string;
};

export type ComboExtra = {
  /** 5 items: what a measured visit settles before anything is priced. */
  survey: ComboExtraItem[];
  /** 3 paragraphs: materials and finishes that suit this fabric. */
  materials: string[];
  /** 5 items: the on-site sequence, stage by stage, in this stock. */
  programme: ComboExtraItem[];
  /** 2 paragraphs: deliveries, parking, licensing, the route in. */
  access: string[];
  /** 4 items: what moves the figure here. Drivers, never a price. */
  costDrivers: ComboExtraItem[];
  /** 2 paragraphs: living with the work in this kind of home. */
  living: string[];
  /** 2 paragraphs: handover, snagging and what follows. */
  handover: string[];

  /** Further hand-written questions, merged after the existing FAQ set. */
  moreFaqs: Faq[];
};

export type ComboExtraMap = Record<string, ComboExtra>;

/**
 * A third layer, added after the first sixty blocks were written: how the job
 * goes wrong in this area and what prevents it, plus a further set of
 * questions. Kept in its own map so the files stay a workable size.
 */
export type ComboPitfalls = {
  /** 3 paragraphs: the failure modes particular to this service here. */
  pitfalls: string[];
  /** Further hand-written questions, merged after the rest. */
  moreFaqs: Faq[];
};

export type ComboPitfallsMap = Record<string, ComboPitfalls>;
