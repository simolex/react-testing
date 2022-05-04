// import { render, screen, fireEvent } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import App from "./App";

// describe("TEST App", () => {
//   test("renders learn react link", () => {
//     render(<App />);
//     const helloWorldElem = screen.getByText(/hello world/i);
//     const btnElem = screen.getByRole("button");
//     const inputElem = screen.getByPlaceholderText(/input value/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(btnElem).toBeInTheDocument();
//     expect(inputElem).toMatchSnapshot();
//   });

//   test("renders learn react link", async () => {
//     render(<App />);
//     // const helloWorldElem = screen.queryByText(/hello2/i);
//     // expect(helloWorldElem).toBeNull();
//     const helloWorldElem = await screen.findByText(/data/i);
//     expect(helloWorldElem).toBeInTheDocument();
//     expect(helloWorldElem).toHaveStyle({ color: "red" });
//   });

//   test("click Event", () => {
//     render(<App />);
//     const btnElem = screen.getByTestId("toggle-btn");

//     expect(screen.queryByTestId("toggle-elem")).toBeNull();

//     fireEvent.click(btnElem);
//     expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();

//     fireEvent.click(btnElem);
//     expect(screen.queryByTestId("toggle-elem")).toBeNull();
//   });

//   test("input Event", () => {
//     render(<App />);
//     const inputElem = screen.getByPlaceholderText(/input value/i);

//     expect(screen.queryByTestId("value-elem")).toContainHTML("");
//     //Искуственное событие (имитация события)
//     // fireEvent.input(inputElem, {
//     //   target: {
//     //     value: "123123",
//     //   },
//     // });

//     //Имитация Действий пользователя
//     userEvent.type(inputElem, "123123");

//     expect(screen.queryByTestId("value-elem")).toContainHTML("123123");
//   });
// });
