/**
 * A utility function to conditionally join CSS class names.
 * It accepts any number of arguments, which can be strings, arrays of strings,
 * or objects where keys are class names and values are booleans.
 *
 * @param {...(string | string[] | Record<string, boolean | undefined | null> | undefined | null | false)} args - The class names or conditions.
 * @returns {string} A single string containing all valid, joined class names.
 */
export type ClassValue =
	| string
	| number // Converted to string
	| null
	| undefined
	| boolean // false values are ignored
	| { [className: string]: unknown } // Object with truthy/falsy values
	| ClassValue[]; // Array of any from the above

export function cx(...args: ClassValue[]): string {
	const classes: string[] = [];

	for (const arg of args) {
		if (!arg) {
			// Skip null, undefined, false, 0, empty string
			continue;
		}

		const argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			// Handle string or number (numbers are converted to strings)
			// Split space-separated classes and filter out empty strings
			const individualClasses = String(arg).split(' ').filter(Boolean);
			classes.push(...individualClasses);
		} else if (Array.isArray(arg)) {
			// Handle array: recursively call cx with its elements
			if (arg.length > 0) {
				const innerClassesString = cx(...arg); // Recursive call returns a string
				if (innerClassesString) {
					// Split the string from the recursive call back into individual classes
					// and add them to the current list for proper deduplication.
					classes.push(...innerClassesString.split(' ').filter(Boolean));
				}
			}
		} else if (typeof arg === 'object') {
			// Handle an object: add keys as classes if their values are truthy
			// This check ensures `arg` is a plain object and not null (which typeof null is 'object')
			if (!Array.isArray(arg)) {
				for (const key in arg as { [className: string]: unknown }) {
					// Check if the property is an own property and its value is truthy
					if (
						Object.hasOwn(arg, key) &&
						(arg as { [className: string]: unknown })[key]
					) {
						// Split space-separated keys and filter out empty strings
						const individualClasses = key.split(' ').filter(Boolean);
						classes.push(...individualClasses);
					}
				}
			}
		}
	}

	// Join all collected classes with a space.
	// Using a Set to remove duplicates before joining.
	return Array.from(new Set(classes)).join(' ');
}
