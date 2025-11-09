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

/* Named function in TypeScript */
// function intro(name: string, age: number): string {
// 	return `My name is ${name} and I am ${age} years old.`;
// }
/* Function Expression*/
// const intro2 = function (name: string, age: number): string {
// 	return `My name is ${name} and I am ${age} years old.`;
// };
/* Arrow function */
// const intro3 = (name: string, age: number): string => {
// 	return `My name is ${name} and I am ${age} years old.`;
// };

// Function with Optional Parameter
// Optional parameters can only be declared after all default parameters are declared
// function intro(name?: string, age: number): string {

function intro(name: string, age: number, country?: string): string {
	let countryInfo = country ? ` from ${country}` : '';
	return `My name is ${name} and I am ${age} years old${countryInfo}.`;
}

//  custom parameter types and return types for functions


enum AgeUnit {
	Years = 'years',
	Months = 'months',
}
type Person = { name: string; age: number, ageUnit: AgeUnit; }; // type alias

const person1: Person = { name: 'Scott', age: 30, ageUnit: AgeUnit.Years };

function convertAgeToMonths(person: Person): Person {
	if (person.ageUnit === AgeUnit.Years) {
		person.age = person.age * 12;
		person.ageUnit = AgeUnit.Months;
	}
	return person;
}
console.log(convertAgeToMonths(person1));