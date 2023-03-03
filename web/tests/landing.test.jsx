import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Landing from "../src/pages/Landing";

describe("Landing Page test", () => {
  test("Page should be shown", () => {
    render(<Landing />);
    expect(screen.getByText(/Let's dribble/i)).toBeDefined();
  });
});
