export function getSafeString(length: number, letterBank: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"): string {
	// Return empty string for invalid inputs
	if (length <= 0 || letterBank.length === 0) {
		return "";
	}

	let result = "";
	for (let i = 0; i < length; i++) {
		result += letterBank.charAt(Math.floor(Math.random() * letterBank.length));
	}
	return result;
}
