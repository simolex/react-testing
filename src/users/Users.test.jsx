import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../tests/helpers/renderTestApp";
import axios from "axios";

jest.mock("axios");

describe("TEST Users", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders Users component", async () => {
    axios.get.mockReturnValue(response);
    render(renderTestApp(null, { route: "/users" }));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    //screen.debug();
  });

  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(renderTestApp(null, { route: "/users" }));
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
  });
});
