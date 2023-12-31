import React from "react";
import { render, fireEvent, screen , waitFor} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import { MemoryRouter } from "react-router-dom";

require("cross-fetch/polyfill");

// Mock the navigate function
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe("App", () => {
  beforeEach(() => {
    // Reset the mockNavigate before each test
    mockNavigate.mockReset();
    // Mock the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}), // Adjust the resolved value as necessary
      })
    );
  });

  test("go home after delete finishes", async () => {
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

    const mockFetch = jest
      .spyOn(window, "fetch")
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockUser) })
      );

    render(
      <MemoryRouter initialEntries={["/user/1"]}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText(/Clementina DuBuque/i);

    await fireEvent.click(screen.getByText(/delete/i));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });

  });
});