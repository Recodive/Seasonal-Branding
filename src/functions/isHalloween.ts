export default function isHalloween() {
	const now = new Date();

	return (now.getUTCMonth() === 9 && now.getUTCDate() >= 24) || (now.getUTCMonth() === 10 && now.getUTCDate() <= 1);
}
