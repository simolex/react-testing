import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("Conter test", () => {
  test("Test router", () => {
    const { getByTestId } = render(
      renderTestApp(null, {
        route: "/",
        initialState: {
          counter: {
            value: 10,
          },
        },
      })
    );
    //const { getByTestId } = screen.getByTestId("counter-component");
    const incrementBtn = getByTestId("increment-btn");
    const decrementBtn = getByTestId("decrement-btn");
    expect(getByTestId("value-title")).toHaveTextContent("10");
    userEvent.click(incrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("11");
    userEvent.click(decrementBtn);
    expect(getByTestId("value-title")).toHaveTextContent("10");
  });
});
