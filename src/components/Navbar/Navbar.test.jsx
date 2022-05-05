import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderTestApp } from "../../tests/helpers/renderTestApp";
import Navbar from "./Navbar";

describe("NAVBAR tests", () => {
  test("renders about link test", () => {
    render(renderTestApp(<Navbar />));
    const aboutLink = screen.getByTestId("about-link");

    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("renders main link test", () => {
    render(renderTestApp(<Navbar />));
    const mainLink = screen.getByTestId("main-link");

    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("renders users link test", () => {
    render(renderTestApp(<Navbar />));
    const usersLink = screen.getByTestId("users-link");

    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
