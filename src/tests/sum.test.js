import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 equals 3", () => {
  expect(sum(1, 2)).toBe(3);
});