import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isAprilFools(options?: SeasonalOptions) {
	const now = DateTime.now();
	if (options?.dateOptions?.zone) now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);

	return now.month === 4 && now.day === 1;
}
