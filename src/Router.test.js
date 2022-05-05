import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderTestApp } from "./tests/helpers/renderTestApp";

describe("TEST App", () => {
  test("Error page test", () => {
    render(renderTestApp(null, { route: "/asd" }));

    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
