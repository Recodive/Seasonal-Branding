import isValentine from "../functions/isValentine";

test("isValentine", () => {
	jest.useFakeTimers().setSystemTime(new Date("2021-02-14").getTime());
	expect(isValentine()).toBe(true);
});
