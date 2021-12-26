export default function isNewYear() {
	const now = new Date();

	return (now.getUTCMonth() === 11 && now.getUTCDate() >= 30) || (now.getUTCMonth() === 0 && now.getUTCDate() <= 2);
}
