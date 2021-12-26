import isAprilFools from "./functions/isAprilFools";
import isChristmas from "./functions/isChristmas";
import isEaster from "./functions/isEaster";
import isHalloween from "./functions/isHalloween";
import isLunarNewYear from "./functions/isLunarNewYear";
import isNewYear from "./functions/isNewYear";
import isValentine from "./functions/isValentine";

export type SeasonalEvents =
	| "New Year's Day"
	| "Chinese New Year"
	| "Valentine's Day"
	| "Easter"
	| "April Fools"
	| "Halloween"
	| "Christmas"
	| "None";

export function getSeasonalBranding(): SeasonalEvents {
	if (isNewYear()) return "New Year's Day";
	if (isLunarNewYear()) return "Chinese New Year";
	if (isValentine()) return "Valentine's Day";
	if (isEaster()) return "Easter";
	if (isAprilFools()) return "April Fools";
	if (isHalloween()) return "Halloween";
	if (isChristmas()) return "Christmas";
	return "None";
}
