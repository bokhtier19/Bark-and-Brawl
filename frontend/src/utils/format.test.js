import { describe, it, expect } from "vitest";
import { formatUsd } from "./format.js";

describe("formatUsd", () => {
    it("formats amounts as USD", () => {
        expect(formatUsd(99)).toBe("$99.00");
        expect(formatUsd(15.5)).toBe("$15.50");
    });
});
