export default function isValentine() {
	const now = new Date();
	return now.getUTCMonth() === 1 && now.getUTCDate() === 14;
}
