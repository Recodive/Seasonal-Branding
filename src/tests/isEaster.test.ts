import isEaster from "../functions/isEaster";

test("isEaster", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-04-04").getTime());
	expect(isEaster()).toBe(true);
});
