import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isChristmas(options?: SeasonalOptions) {
	const now = DateTime.now();
	if (options?.dateOptions?.zone) now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);

	return now.month === 12 && now.day >= 11 && now.day <= 29;
}
