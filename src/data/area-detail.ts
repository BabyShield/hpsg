import type { Faq } from "./types";

/**
 * Deeper per-area copy layered onto AreaHubContent. Area hubs were the
 * thinnest of the three core templates; these fields carry the housing
 * detail that makes each of the 25 pages worth reading on its own.
 */
export type AreaDetail = {
  /** Named streets and sub-neighbourhoods, and the stock on them. */
  streets: string;
  /** Recurring building types and what they mean for interior work. */
  buildings: string;
  /** Parking, loading, skips and access specifics. */
  access: string;
  /** Additional hand-written questions, merged after the existing faqs. */
  extraFaqs: Faq[];
};

export const areaDetail: Record<string, AreaDetail> = {};
