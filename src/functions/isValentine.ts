import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isValentine(options?: SeasonalOptions) {
	const now = DateTime.now();
	if (options?.dateOptions?.zone) now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);

	return now.month === 2 && now.day === 14;
}
