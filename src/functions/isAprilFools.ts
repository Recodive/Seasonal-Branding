export default function isAprilFools() {
	const now = new Date();
	return now.getUTCMonth() === 3 && now.getUTCDate() === 1;
}
