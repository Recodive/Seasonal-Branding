import { Zone, ZoneOptions } from "luxon";

import isAprilFools from "./functions/isAprilFools";
import isChristmas from "./functions/isChristmas";
import isEaster from "./functions/isEaster";
import isHalloween from "./functions/isHalloween";
import isLunarNewYear from "./functions/isLunarNewYear";
import isNewYear from "./functions/isNewYear";
import isValentine from "./functions/isValentine";

export enum SeasonalEvents {
	NewYear = "New Year's Day",
	LunarNewYear = "Lunar New Year",
	Valentine = "Valentine's Day",
	Easter = "Easter",
	AprilFools = "April Fools",
	Halloween = "Halloween",
	Christmas = "Christmas",
	None = "None"
}

export function getSeasonalBranding(options?: SeasonalOptions): SeasonalEvents {
	if (isNewYear(options)) return SeasonalEvents.NewYear;
	if (isLunarNewYear(options)) return SeasonalEvents.LunarNewYear;
	if (isValentine(options)) return SeasonalEvents.Valentine;
	if (isEaster(options)) return SeasonalEvents.Easter;
	if (isAprilFools(options)) return SeasonalEvents.AprilFools;
	if (isHalloween(options)) return SeasonalEvents.Halloween;
	if (isChristmas(options)) return SeasonalEvents.Christmas;
	return SeasonalEvents.None;
}

export interface SeasonalOptions {
	dateOptions?: {
		zone?: string | Zone;
		zoneOptions?: ZoneOptions;
	};
}
