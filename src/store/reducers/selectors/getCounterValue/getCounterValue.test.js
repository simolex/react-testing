import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
  test("Работа с пустым объектом", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("Работа с  не пустым объектом", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
