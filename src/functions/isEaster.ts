import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isEaster(options?: SeasonalOptions) {
	const now = DateTime.now();
	let startDate = DateTime.now(),
		endDate = DateTime.now();

	if (options?.dateOptions?.zone) {
		now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
		startDate.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
		endDate.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
	}

	const year = now.year,
		c = Math.floor(year / 100),
		n = year - 19 * Math.floor(year / 19),
		k = Math.floor((c - 17) / 25);
	let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15;
	i = i - 30 * Math.floor(i / 30);
	i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) * Math.floor(29 / (i + 1)) * Math.floor((21 - n) / 11));
	let j = year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4);
	j = j - 7 * Math.floor(j / 7);
	const l = i - j,
		month = 3 + Math.floor((l + 40) / 44),
		day = l + 28 - 31 * Math.floor(month / 4);

	startDate = startDate.set({ year, month, day, hour: 0, minute: 0, second: 0, millisecond: 0 });
	endDate = endDate.set({ year, month, day, hour: 23, minute: 59, second: 59, millisecond: 999 });

	startDate = startDate.minus({ days: 7 });
	endDate = endDate.plus({ days: 1 });

	if (now.toMillis() >= startDate.toMillis() && now.toMillis() <= endDate.toMillis()) return true;
	else return false;
}
