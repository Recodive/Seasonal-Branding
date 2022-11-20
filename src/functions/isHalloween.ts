import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isHalloween(options?: SeasonalOptions) {
	const now = DateTime.now();
	if (options?.dateOptions?.zone) now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);

	return (now.month === 10 && now.day >= 24) || (now.month === 11 && now.day <= 1);
}
