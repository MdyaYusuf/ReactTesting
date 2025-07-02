import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import UserProfile from "../components/UserProfile";

describe("UserProfile", () => {

  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("fetch data and display the user data", async () => {

    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 4, name: "Yusuf", email: "yusuf@gmail.com" })
    })

    render(<UserProfile userId={1} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: /yusuf/i })).toBeInTheDocument();
      expect(screen.getByText(/yusuf@gmail.com/i)).toBeInTheDocument();
    });
  });
});