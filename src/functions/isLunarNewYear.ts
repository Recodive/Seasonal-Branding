import { CalendarChinese } from "date-chinese";
import { DateTime } from "luxon";

import { SeasonalOptions } from "..";

export default function isLunarNewYear(options?: SeasonalOptions) {
	const now = DateTime.now();
	let startDate = DateTime.now(),
		endDate = DateTime.now();
	if (options?.dateOptions?.zone) {
		now.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
		startDate.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
		endDate.setZone(options.dateOptions.zone, options.dateOptions.zoneOptions);
	}

	const cal = new CalendarChinese();
	cal.fromJDE(cal.newYear(now.year));
	const gdate = cal.toDate();

	startDate = startDate.set({
		year: gdate.getFullYear(),
		month: gdate.getMonth() + 1,
		day: gdate.getDate(),
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0
	});
	endDate = endDate.set({
		year: gdate.getFullYear(),
		month: gdate.getMonth() + 1,
		day: gdate.getDate(),
		hour: 23,
		minute: 59,
		second: 59,
		millisecond: 999
	});

	startDate = startDate.minus({ days: 7 });
	endDate = endDate.plus({ days: 1 });

	if (now.toMillis() >= startDate.toMillis() && now.toMillis() <= endDate.toMillis()) return true;
	else return false;
}
