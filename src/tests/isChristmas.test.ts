import isChristmas from "../functions/isChristmas";

test("isChristmas", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-12-25").getTime());
	expect(isChristmas()).toBe(true);
});
