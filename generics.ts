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

// Example 4: Using a mapped type with the generic type
type PersonWithSalary<T> = {
	...Person<T>,
	salary: number;
}; `1`;
const personWithSalary: PersonWithSalary<number> = {
	name: "Sarah",
	age: 32,
	hobbies: [1, 2, 3],
	salary: 50000,
};

// Example 5: Using a generic type for the value in a tuple
type TupleValue<T> = [string | T];
const tupleValue: TupleValue<number> = ["hello", 42];

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