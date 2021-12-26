import { CalendarChinese } from "date-chinese";

export default function isLunarNewYear() {
	const cal = new CalendarChinese();
	cal.fromJDE(cal.newYear(new Date().getUTCFullYear()));
	const gdate = cal.toDate(),
		start = new Date(gdate),
		end = new Date(gdate);
	start.setDate(gdate.getDate() - 7);
	end.setDate(gdate.getDate() + 1);

	if (new Date().getTime() > start.getTime() && new Date().getTime() < end.getTime()) return true;
	else return false;
}
