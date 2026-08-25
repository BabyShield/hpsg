import { bathroomCombos } from "./combo-bathroom";
import { kitchenCombos } from "./combo-kitchen";
import { paintingCombos } from "./combo-painting";
import { refurbCombos } from "./combo-refurb";
import type { ComboDetailMap } from "./combo-detail";
import { bathroomDetail } from "./combo-detail-bathroom";
import { kitchenDetail } from "./combo-detail-kitchen";
import { paintingDetail } from "./combo-detail-painting";
import { refurbDetail } from "./combo-detail-refurb";
import type { ComboContent } from "./types";

/** Fold the per-area detail layer into the base combo content. */
function withDetail(
  base: Record<string, ComboContent>,
  detail: ComboDetailMap,
): Record<string, ComboContent> {
  const merged: Record<string, ComboContent> = {};
  for (const [areaSlug, content] of Object.entries(base)) {
    const extra = detail[areaSlug];
    merged[areaSlug] = extra
      ? {
          ...content,
          scopeNotes: extra.scopeNotes,
          processNote: extra.processNote,
          consent: extra.consent,
          localFaqs: [...content.localFaqs, ...extra.extraFaqs],
        }
      : content;
  }
  return merged;
}

export const comboContent: Record<string, Record<string, ComboContent>> = {
  "kitchen-renovation": withDetail(kitchenCombos, kitchenDetail),
  "bathroom-renovation": withDetail(bathroomCombos, bathroomDetail),
  "painting-decorating": withDetail(paintingCombos, paintingDetail),
  "light-refurbishment": withDetail(refurbCombos, refurbDetail),
};

export function getComboContent(
  serviceSlug: string,
  areaSlug: string,
): ComboContent | undefined {
  return comboContent[serviceSlug]?.[areaSlug];
}
