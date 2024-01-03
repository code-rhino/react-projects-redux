import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen} from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import { fetchUsersWithPosts, fetchUserWithPosts } from "../api"

require("cross-fetch/polyfill");

jest.mock("../api");

describe("App", () => {
  afterEach(() => {
    fetchUserWithPosts.mockReset();
    fetchUsersWithPosts.mockReset();
  });

  test("Navigating to an unknown URL shows 'Page not found!'", async () => {
    // ... mock implementations ...

    render(
      <MemoryRouter initialEntries={["/this/route/does/not/exist"]}>
          <App />
      </MemoryRouter>
    );

    await screen.findByText(/page not found/i);

    expect(screen.getByText("Page not found!")).toBeInTheDocument();
  });

  /*test("/ does not show 'Go Home', user info, or blog posts", async () => {
    // ... mock implementations ...

    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText(/Clementina DuBuque/i);

    expect(screen.queryAllByText(/email/i)).toHaveLength(0);
    // ... other expectations ...
  });*/
});
