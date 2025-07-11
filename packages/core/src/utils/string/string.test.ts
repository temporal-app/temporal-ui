import { getInitials, getSafeString } from "./string";

describe("string utils", () => {
	describe("getSafeString", () => {
		it("should generate a string of the specified length", () => {
			const length = 10;
			const result = getSafeString(length);
			expect(result.length).toBe(length);
		});

		it("should generate a string using only characters from the default letter bank", () => {
			const defaultLetterBank = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
			const result = getSafeString(100); // Using a large length to increase test coverage

			// Check that every character in the result is from the letter bank
			for (const char of result) {
				expect(defaultLetterBank).toContain(char);
			}
		});

		it("should generate a string using only characters from a custom letter bank", () => {
			const customLetterBank = "123456789";
			const result = getSafeString(20, customLetterBank);

			// Check that every character in the result is from the custom letter bank
			for (const char of result) {
				expect(customLetterBank).toContain(char);
			}
		});

		it("should generate different strings on subsequent calls", () => {
			const length = 10;
			const result1 = getSafeString(length);
			const result2 = getSafeString(length);

			// There's a very small chance this could fail randomly, but it's extremely unlikely
			expect(result1).not.toBe(result2);
		});

		it("should handle zero length by returning an empty string", () => {
			const result = getSafeString(0);
			expect(result).toBe("");
		});

		it("should handle an empty letter bank by returning an empty string", () => {
			const result = getSafeString(10, "");
			expect(result).toBe("");
		});

		it("should handle negative length by returning an empty string", () => {
			const result = getSafeString(-5);
			expect(result).toBe("");
		});
	});

	describe("getInitials", () => {
		it("should return initials for a full name", () => {
			expect(getInitials("John Doe")).toBe("JD");
		});

		it("should return a single initial for a single name", () => {
			expect(getInitials("Alice")).toBe("A");
		});

		it("should return initials for names with more than two parts", () => {
			expect(getInitials("Mary Jane Watson")).toBe("MJ");
		});

		it("should handle extra spaces between names", () => {
			expect(getInitials("  John   Smith  ")).toBe("JS");
		});

		it("should return an empty string for an empty input", () => {
			expect(getInitials("")).toBe("");
		});

		it("should handle names with non-letter characters", () => {
			expect(getInitials("Jean-Luc Picard")).toBe("JP");
		});

		it("should handle lowercase names", () => {
			expect(getInitials("john doe")).toBe("JD");
		});
	});

});
