type Person<T> = {
	name: string;
	age: number;
	hobbies: T[];
};

// Example 1: Basic usage with a generic type
const person: Person<number> = {
	name: "John Doe",
	age: 30,
	hobbies: [1, 2, 3, 4, 5],
};

// Example 2: Using a string as the generic type
type StringPerson = Person<string>;
const stringPerson: StringPerson = {
	name: "Jane Smith",
	age: 25,
	hobbies: ["coding", "reading"],
};

// Example 3: Using a union type with the generic type
interface Animal {
	animalType: "dog" | "cat";
}

type AnimalList<T> = T[];
const animal: Person<Animal> = {
	name: "Max",
	age: 5,
	hobbies: [{ animalType: "dog" }, { animalType: "cat" }],
};

// This is a function that takes a generic parameter and returns it
function returnParams<Type>(param: Type): Type {
	return param;
}

returnParams<string>("String");// now string type is passed so the funcion retun type is string
returnParams<number>(123); // now number type is passed so the funcion retun type is number

const myParam: <T>(param: T) => T = param => param;//generic arrow function example

const myParam1: <T>(a: T, b: T) => T = (a, b) => a;//generic arrow function with two parameters example

const myParam3 = function <U>(param: U): U {//generic function expression example
	return param;
};

type myParam4 = <T>(param: T) => T;//generic function type example

type objectType = {
	myParam: <V>(param: V) => V;//generic function type in object type example
	myParam1: <W, X>(a: W, b: X) => W | X;//generic function type with two parameters in object type example
};

type objectType1 = {
	myParam: myParam4;
	myParam1: <W, X>(a: W, b: X) => W | X;//generic function type with two parameters in object type example
};


/* generics with funcions */

type GetFirstElement = <T>(arr: T[]) => T | undefined;//added undefined to handle empty array case

const getFirstElement: GetFirstElement = (arr) => {
	return arr.length ? arr[0] : undefined;
};

// console.log(getFirstElement([1, 2, 3]));
// console.log(getFirstElement(['a', 'b']));;


type FirstElementFunction<T> = (arr: T[]) => T | undefined;

const firstElement: FirstElementFunction<string> = (arr) => arr[0];
//This declaration creates a function that only works with types which are declared during decalration. Its not reusable like the previous one.

const firstElementFunction: FirstElementFunction<number> = (arr) => arr[0];// best case for reusable function with specific type

/* Generics With Array */
//Below type definition checks for length property
type HasLength = {
	length: number;
};

function logLength<T extends HasLength>(params: T): void {
	// console.log(params.length);
}
logLength("Hello World");
logLength([1, 2, 3, 4, 5]);
logLength({ length: 10, value: "Test" });
// logLength(123); // Error: number doesn't have a length property

/* Generics with Objects */

// let stringAndNumberPair = {
// 	key: 'age',
// 	value: 30
// };

// let arrayNumberPair = {
// 	key: [1, 2, 3],
// 	value: 100
// };

// both above variables have same structure but different types as keys can be any type
// we can use generics to define such structures

type KeyValuePair<K, V> = { key: K, value: V; };

let stringAndNumberPair: KeyValuePair<string, number> = {
	key: 'age',
	value: 30
};

let arrayNumberPair: KeyValuePair<number[], number> = {
	key: [1, 2, 3],
	value: 100
};

type HasId = {
	id: number;
};

function printKey<T extends HasId>(obj: T): number {
	return obj.id;
}

printKey({ id: 123, name: 'Test' });
// printKey({name:'Product'}); //Error as id is missing

/* keyof operator */

type Events = {
	id: number;
	date: Date;
	type: 'indoor' | 'outdoor';
};

type UnionOfKeysOfEvents = keyof Events;//"id" | "date" | "type"

let idOfEvents: UnionOfKeysOfEvents = "id";
// let idOfEvents: UnionOfKeysOfEvents = "date";
// let idOfEvents: UnionOfKeysOfEvents = "type";
// let idOfEvents: UnionOfKeysOfEvents = "someKey"; //Error as someKey is not assignable to "id" | "date" | "type"

let dateOfEvents: UnionOfKeysOfEvents = "date";

type Numeric = {
	[key: number]: string;
};

type NumericKeyOf = keyof Numeric;//number

type NumberAndString = {
	[key: string]: number;
};

type NumberAndStringKeyOf = keyof NumberAndString;//string

let stringObject: NumberAndString = {
	1: 1,
	"two": 2,
	"three": 3
};

// console.log(stringObject['1']);

function getEventProperty<T extends Events, K extends keyof Events>(event: T, key: K): T[K] {
	return event[key];
}
getEventProperty({ id: 1, date: new Date(), type: 'indoor' }, 'date');
//This type can be used to create functions that access properties of objects in a type-safe manner based on the keys provided.

/* Partial */

type User = {
	id: number;
	name: string;
	email: string;
	age: number;
};

type PartialUser = {
	[P in keyof User]?: User[P] | null | undefined;
};

const user1: User = {
	id: 1,
	name: "John Doe",
	email: "john@example.com",
	age: 30
};

const partialUser: PartialUser = {
	name: "Jane Doe"
};

/* Generic Default Types */
//by default generic type is any if not specified
async function fetchData<T = any>(url: string): Promise<T> {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}

async function fetchDefault() {
	const data = await fetchData("https://jsonplaceholder.typicode.com/users");
	// console.log(data);
	return data;
}
fetchDefault();


type userResponse = {
	id: number;
	name: string;
	username: string;
	email: string;
};

async function fetchUserData() {
	const data = await fetchData<userResponse[]>("https://jsonplaceholder.typicode.com/users");
	console.log(data);
}

// fetchUserData();

/* implementing a polymorphic function */

const filter = (array: any[], predicate: (item: any) => boolean): any[] => {
	let result: any[] = [];
	for (let i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
};

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, (num) => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]

const animals = ['cat', 'dog', 'elephant', 'lion'];
const longNamedAnimals = filter(animals, (animal) => animal.length > 3);
// console.log(longNamedAnimals); // ['elephant', 'lion']

/* Now lets make this function generic */

/* creating a function overload for the same case first */
type FilterOverload = {
	(array: number[], predictae: (item: number) => boolean): number[];
	(array: string[], predictae: (item: string) => boolean): string[];
	(array: object[], predictae: (item: object) => boolean): object[];
};



/* fixing the error by using generics */
const genericFilter = <T,>(array: T[], predicate: (item: T) => boolean): T[] => {
	let result: T[] = [];
	for (const item of array) {
		if (predicate(item)) {
			result.push(item);
		}
	}
	return result;
};


const genericEvenNumbers = genericFilter<number>(numbers, (num) => num % 2 === 0);
console.log(genericEvenNumbers); // [2, 4, 6]

/* coding exercise */
//here is the map function which can recieve an array of any type and a transform function to convert each element to another type and also handles empty array case. This function takes two generic types T and U and returns an array of type U or T based on the transform function provided.

const map = <T, U>(array: T[], transform: (T: any) => U): (U | T)[] => {
	if (array.length === 0) {
		return array;
	}
	let result: U[] = [];
	for (let i = 0; i < array.length; i++) {
		result.push(transform(array[i]));
	}
	return result;
};

let number = [4, 5, 6, 7, 8];

const converted = map(number, (num) => num.toString());
console.log(converted); // ['4', '5', '6', '7', '8']