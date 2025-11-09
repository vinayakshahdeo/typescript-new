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
// console.log(convertAgeToMonths(person1));

type GreetFunction = (arg0: string) => string;

const greet: GreetFunction = (name = 'Guest') => `Hello, ${name}!`;

greet('');
greet('John');

type AreaFunction = (arg0: number, arg1?: number) => number;
const calculateArea: AreaFunction = (width, height = 10) => width * height;

calculateArea(5);
calculateArea(5, 20);

type StatusFunction = (arg0?: boolean) => string;
/* named function */
const statusNamed: StatusFunction = function (isActive = true) {
	return isActive ? 'Active' : 'Inactive';
};

/* arrow function  */
const statusArrow: StatusFunction = (isActive = true) => isActive ? 'Active' : 'Inactive';

/* As a higher-order function (returns a StatusFunction): */
function makeStatusFunction(defaultStatus: boolean): StatusFunction {
	return (isActive = defaultStatus) => isActive ? 'Active' : 'Inactive';
}
const customStatus = makeStatusFunction(false);

/* inline function */

const inlineStatus: StatusFunction = function (active) {
	return active ? 'Active' : 'Inactive';
};

/* Using a class with a method matching StatusFunction: */

class StatusChecker {
	getStatus: StatusFunction = (isActive = true) => isActive ? 'Active' : 'Inactive';
}
const checker = new StatusChecker();

/* function with Objects */

type GreetingFunction = (greeting: string) => string;
type Person2 = {
	name: string,
	age: number,
	greet: GreetingFunction;
	// greet: (greeting: string) => string;
	//greet:Function // not strictly typed
};

const person2: Person2 = {
	name: 'John Doe',
	age: 30,
	greet: (greeting = 'Hi!') => {
		return `${greeting} ${person2.name}`;
	}
};

console.log(person2.greet('Hello'));