import { bathroomCombos } from "./combo-bathroom";
import { kitchenCombos } from "./combo-kitchen";
import { paintingCombos } from "./combo-painting";
import { refurbCombos } from "./combo-refurb";
import type { ComboDetailMap } from "./combo-detail";
import { bathroomDetail } from "./combo-detail-bathroom";
import { kitchenDetail } from "./combo-detail-kitchen";
import { paintingDetail } from "./combo-detail-painting";
import { refurbDetail } from "./combo-detail-refurb";
import type { ComboExtraMap, ComboPitfallsMap } from "./combo-extra";
import { bathroomExtra } from "./combo-extra-bathroom";
import { kitchenExtra } from "./combo-extra-kitchen";
import { paintingExtra } from "./combo-extra-painting";
import { refurbExtra } from "./combo-extra-refurb";
import { bathroomPitfalls } from "./combo-pitfalls-bathroom";
import { kitchenPitfalls } from "./combo-pitfalls-kitchen";
import { paintingPitfalls } from "./combo-pitfalls-painting";
import { refurbPitfalls } from "./combo-pitfalls-refurb";
import type { ComboContent } from "./types";

/** Fold the per-area detail and extra layers into the base combo content. */
function withDetail(
  base: Record<string, ComboContent>,
  detail: ComboDetailMap,
  extra: ComboExtraMap,
  last: ComboPitfallsMap,
): Record<string, ComboContent> {
  const merged: Record<string, ComboContent> = {};
  for (const [areaSlug, content] of Object.entries(base)) {
    const more = detail[areaSlug];
    const deeper = extra[areaSlug];
    const final = last[areaSlug];
    merged[areaSlug] = {
      ...content,
      ...(more
        ? {
            scopeNotes: more.scopeNotes,
            processNote: more.processNote,
            consent: more.consent,
            audience: more.audience,
            failures: more.failures,
          }
        : {}),
      ...(deeper
        ? {
            survey: deeper.survey,
            materials: deeper.materials,
            programme: deeper.programme,
            access: deeper.access,
            costDrivers: deeper.costDrivers,
            living: deeper.living,
            handover: deeper.handover,
          }
        : {}),
      ...(final ? { pitfalls: final.pitfalls } : {}),
      localFaqs: [
        ...content.localFaqs,
        ...(more?.extraFaqs ?? []),
        ...(deeper?.moreFaqs ?? []),
        ...(final?.moreFaqs ?? []),
      ],
    };
  }
  return merged;
}

export const comboContent: Record<string, Record<string, ComboContent>> = {
  "kitchen-renovation": withDetail(kitchenCombos, kitchenDetail, kitchenExtra, kitchenPitfalls),
  "bathroom-renovation": withDetail(bathroomCombos, bathroomDetail, bathroomExtra, bathroomPitfalls),
  "painting-decorating": withDetail(paintingCombos, paintingDetail, paintingExtra, paintingPitfalls),
  "light-refurbishment": withDetail(refurbCombos, refurbDetail, refurbExtra, refurbPitfalls),
};

export function getComboContent(
  serviceSlug: string,
  areaSlug: string,
): ComboContent | undefined {
  return comboContent[serviceSlug]?.[areaSlug];
}
