import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../router/AppRouter";

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
    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    //screen.debug();
  });

  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <AppRouter />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-details-page")).toBeInTheDocument();
  });
});
