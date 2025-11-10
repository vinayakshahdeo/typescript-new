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
	},
	// greet: function (this: Person2, greeting = 'Hi!') {
	// 	return `${greeting} ${this.name}`;
	// },
};

// console.log(person2.greet('Hello'));

const students = ['Alice', 'Bob', 'Mark'];

students.map((student) => {
	// console.log(`Student name is: ${student}`);
});
/* correctly infered as anonymous function by ts */
students.map(function (student) {
	// console.log(`Student2 name is: ${student}`);
	return student;
});

/* never and void types with array */
// void here makes sure nothing is executed
function writeToDatabase(value: string): void {
	console.log('Writing to database...', value);
}
//never is used whenever the function never completes execution

// function throwError(error: string): never {
// 	throw new Error(error);

// }

type check = never extends void ? true : false;
type check2 = void extends never ? true : false;
//we can use void instead of never as its subset of void but not vice versa

/* coding exercise */
type LogMessage = (msg: string) => void;
let log: LogMessage = function (str = 'Helloo') {
	// console.log(str);
};
log('Hello Typescript');

type ThrowError = (msg: string) => never;

let throwError: ThrowError = function (err) {
	throw new Error(err);
};

const processData = (data: string): void => {
	log(`Processing ${data}`);
};
processData('sample data');

const errorHandlingScenario = (): never => {
	return throwError('An unexpected error occurred!');
};

/*Async function  */
//it returns a promise
async function fetchFromDatabase(id: number): Promise<any> { }

const anotherAsyncFunction = async (): Promise<any> => { };

/* using promise.resolve as async will return promise implicitly */
async function returnString(id: number): Promise<string> {
	return Promise.resolve("string");
}

/* strict typing with async functions for nested objects*/

type User = { name: string, age: number; };

async function returnUser(age: number): Promise<User> {
	return Promise.resolve({ name: 'John Doe', age });
}

/* rest parameters with async functions */

function multiplyBy(params: number, ...rest: number[]) {
	return rest.map((number) => number * params);
}

// console.log(multiplyBy(2, 10, 20, 30, 40));

const args = [8, 5] as const;

const args1 = [10, 2] as const; //makes it read only and typescript inhertis types
//similarly tuples can also be declared
// let tupleExample = ['John Doe', 30] as const;
// tupleExample.pop()
let findAnglesBetweenTwoNumbers = Math.atan2(...args);
// console.log(findAnglesBetweenTwoNumbers);
findAnglesBetweenTwoNumbers = Math.atan2(...args1);
// console.log(findAnglesBetweenTwoNumbers);

/* parameter destructuring */
