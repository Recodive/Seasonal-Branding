import isNewYear from "../functions/isNewYear";

test("isNewYear", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-01-01").getTime());
	expect(isNewYear()).toBe(true);
});
