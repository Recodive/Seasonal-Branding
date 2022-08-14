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

export function getSeasonalBranding(): SeasonalEvents {
	if (isNewYear()) return SeasonalEvents.NewYear;
	if (isLunarNewYear()) return SeasonalEvents.LunarNewYear;
	if (isValentine()) return SeasonalEvents.Valentine;
	if (isEaster()) return SeasonalEvents.Easter;
	if (isAprilFools()) return SeasonalEvents.AprilFools;
	if (isHalloween()) return SeasonalEvents.Halloween;
	if (isChristmas()) return SeasonalEvents.Christmas;
	return SeasonalEvents.None;
}
