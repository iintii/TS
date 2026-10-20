export type ParseResult =
	| { ok: true; value: number }
	| { ok: false; error: string };

export function parsePositivePrice(rawInput: string): ParseResult {
	const cleaned = rawInput.trim();
	if (cleaned === "") return { ok: false, error: "Input cannot be empty." };

	const parsed = Number(cleaned);
	if (Number.isNaN(parsed))
		return { ok: false, error: "Number needs to be valid." };

	if (Number.isFinite(parsed))
		return { ok: false, error: "Input must be finite." };

	if (parsed <= 0)
		return { ok: false, error: "Price must be greater than zero." };

	return { ok: true, value: parsed };
}
