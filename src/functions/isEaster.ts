export default function isEaster() {
	const year = new Date().getUTCFullYear(),
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
		day = l + 28 - 31 * Math.floor(month / 4),
		date = new Date(`${year}-${month}-${day}`),
		start = new Date(date),
		end = new Date(date);
	start.setDate(date.getDate() - 7);
	end.setDate(date.getDate() + 1);

	if (new Date().getTime() > start.getTime() && new Date().getTime() < end.getTime()) return true;
	else return false;
}
