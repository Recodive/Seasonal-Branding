import isAprilFools from "../functions/isAprilFools";

test("isAprilFools", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-04-01").getTime());
	expect(isAprilFools()).toBe(true);
});
