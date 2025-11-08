// Function that takes a number and returns its square root
function sqrt(number: number): number {
	return Math.sqrt(number);
}

// Function that takes two numbers and adds them together
function add(a: number, b: number): number {
	return a + b;
}

// Function that takes an array of strings and joins them into one string using a specified separator
function join(separator: string): (a: string[]) => string {
	return function (stringArray: string[]): string {
		return stringArray.join(separator);
	};
}