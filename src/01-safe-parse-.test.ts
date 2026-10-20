import { describe, expect, it } from "vitest";
import { parsePositivePrice } from "./01-safe-parse.js";

describe("parsePositivePrice", () => {
	it("trims white space and coverts valid numeric text", () => {
		expect(parsePositivePrice(" 29.99 ")).toEqual({ ok: true, value: 29.99 });
	});

	it("rejects empty input", () => {
		expect(parsePositivePrice("   ")).toEqual({
			ok: false,
			error: "Input cannot be empty.",
		});
	});

	it("rejects non finite values", () => {
		expect(parsePositivePrice("Infinity")).toEqual({
			ok: false,
			error: "Input must be finite.",
		});
	});

	it("rejects text that is not a number", () => {
		expect(parsePositivePrice("free")).toEqual({
			ok: false,
			error: "Number needs to be valid.",
		});
	});

	it("rejects zero", () => {
		expect(parsePositivePrice("0")).toEqual({
			ok: false,
			error: "Price must be greater than zero",
		});
	});

	it("rejects negative prices", () => {
		expect(parsePositivePrice("-10")).toEqual({
			ok: false,
			error: "Price must be greater than zero",
		});
	});
});
