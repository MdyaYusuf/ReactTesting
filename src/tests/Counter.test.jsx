import React from "react";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "../components/Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  it ("increment counter on button click", async () => {

    render(<Counter />);

    const counterValue = screen.getByTestId("counter-value");
    const button = screen.getByRole("button", { name: /increment/i }); // alternative for name: "Increment". It would find the name even if you are not carefull with the capital letters.

    expect(counterValue.textContent).toEqual("0");

    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(button);
    expect(counterValue.textContent).toEqual("2");
  });
})