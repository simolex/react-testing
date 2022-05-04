import { render, screen } from "@testing-library/react";
import App from "./App";

describe("TEST App", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btnElem = screen.getByRole("button");
    const inputElem = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btnElem).toBeInTheDocument();
    expect(inputElem).toMatchSnapshot();
  });

  test("renders learn react link", async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello2/i);
    // expect(helloWorldElem).toBeNull();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: "red" });
  });
});
