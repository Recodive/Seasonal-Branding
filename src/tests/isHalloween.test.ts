import isHalloween from "../functions/isHalloween";

test("isHalloween", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-10-31").getTime());
	expect(isHalloween()).toBe(true);
});
