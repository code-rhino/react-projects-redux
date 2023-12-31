import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "../App";
require("cross-fetch/polyfill");

describe("App", () => {
  test("landing on a bad page shows a `404 Not Found` message inside a header element", () => {
    render(
      <MemoryRouter initialEntries={["/some/bad/route"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toHaveTextContent("404 Not Found");
  });

  test("route for /user/new", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/new user/i));

    // check that the content changed to the new page
    expect(screen.getByText("Unable to create a new user")).toBeInTheDocument();
  });

  test("route for /user/:userId", async () => {
    const mockUser = {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    };

    jest
      .spyOn(window, "fetch")
      .mockImplementationOnce(() =>
        Promise.resolve({ json: () => Promise.resolve(mockUser) })
      );

    render(
      <MemoryRouter initialEntries={["/user/10"]}>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("user-1"));

    await screen.findByText(/Clementina DuBuque/i);

    // check that the content changed to the new page
    expect(screen.getByText(/Rey.Padberg@karina.biz/i)).toBeInTheDocument();
  });
});
