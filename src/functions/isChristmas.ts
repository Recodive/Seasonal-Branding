export default function isChristmas() {
	const now = new Date();

	return now.getUTCMonth() === 11 && now.getUTCDate() >= 11 && now.getUTCDate() <= 29;
}
