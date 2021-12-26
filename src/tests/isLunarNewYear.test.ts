import isLunarNewYear from "../functions/isLunarNewYear";

test("isLunarNewYear", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-02-12").getTime());
	expect(isLunarNewYear()).toBe(true);
});
