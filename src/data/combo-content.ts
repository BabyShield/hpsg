import { bathroomCombos } from "./combo-bathroom";
import { kitchenCombos } from "./combo-kitchen";
import { paintingCombos } from "./combo-painting";
import { refurbCombos } from "./combo-refurb";
import type { ComboContent } from "./types";

export const comboContent: Record<string, Record<string, ComboContent>> = {
  "kitchen-renovation": kitchenCombos,
  "bathroom-renovation": bathroomCombos,
  "painting-decorating": paintingCombos,
  "light-refurbishment": refurbCombos,
};

export function getComboContent(
  serviceSlug: string,
  areaSlug: string,
): ComboContent | undefined {
  return comboContent[serviceSlug]?.[areaSlug];
}
