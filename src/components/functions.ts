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

// type ThrowError = (msg: string) => never;

// let throwError: ThrowError = function (err) {
// 	throw new Error(err);
// };

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
type Numbers = {
	a: number,
	b: number,
	c: number;
};

let numbers: Numbers = { a: 1, b: 2, c: 3 };

function sum({ a, b, c }: Numbers) {
	return a + b + c;
}

// console.log(sum(numbers));
// console.log(sum({a:1,b:'hello',c:3}))

/* coding exercise */
// type FetchDataFunction = (arg0: string, ...rest: string[]) => Promise<string[]>;

// type Users = { firstName: string, lastName: string, age: number; };

// const user: Users = { firstName: 'John', lastName: 'Doe', age: 30 };

// function getUserInfo({ firstName, lastName, age }: Users): string {
// 	return `User: ${firstName} ${lastName}, Age: ${age}`;
// }
// console.log(getUserInfo(user));

// const fetchData: FetchDataFunction = async (base, ...rest) => {
// 	const query = rest.join('&');
// 	const response = await fetch(`${base}?${query}`);
// 	const data = await response.json();
// 	return data;
// };
// fetchData("https://api.example.com", "param1=value1", "param2=value2");

/* Function Overloading */

const str: string = 'Hello, World!';
const part1 = str.slice(7);
// console.log(part1);
const part2 = str.slice(7, 10);
// console.log(part2);


/* In typrescript we cant have function parameters followed by optional Parameters */
/* two variations of train booking where one has return date and another doesnt have return date */
/* now since either variation can be used hence the return types are unionized by never since both can't be used at the same time */
type Reservation = {
	departureDate: Date;
	returnDate?: Date;
	departingFrom: string;
	destination: string;
};
type Reserve = {
	(departureDate: Date,
		returnDate: Date,
		departingFrom: string,
		destination: string,
	): Reservation | never;
	(departureDate: Date,
		departingFrom: string,
		destination: string,
	): | Reservation | never;
};


const reserve: Reserve = (departureDate: Date, returnDateOrDepartingFrom: Date | string,
	departingFromOrDestination: string, destination?: string) => {
	if (returnDateOrDepartingFrom instanceof Date && destination) {
		return {
			departureDate, returnDate: returnDateOrDepartingFrom,
			departingFrom: departingFromOrDestination, destination: destination
		};
	} else if (typeof returnDateOrDepartingFrom === "string") {
		return {
			departureDate,
			departingFrom: returnDateOrDepartingFrom, destination: departingFromOrDestination
		};
	};
	throw new Error("Please provide valid options");
};

// console.log(reserve(new Date(), new Date('2023-12-25'), 'New York', 'Delhi'));
// console.log(reserve(new Date(), "London", "Paris"));

/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

const greets = (name: string): string => `Hello ${name}`;
console.log(greets("vinayak"));

type Product = {
	id: number;
	name: string;
};
function getProduct(id: number) {
	return { id, name: "Product" };
}
console.log(getProduct(1));


type Calculator = (a: number, b: number) => number;

const adds: Calculator = (a, b) => a + b;


const subtracts: Calculator = function (a, b) {
	return a - b;
};

console.log(adds(1, 2), subtracts(78, 9));

function logMessage(message: string): void {
	console.log(message);
}

function throwError(error: string): never {
	throw new Error(error);
}