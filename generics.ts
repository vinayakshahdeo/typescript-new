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

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(['a', 'b']));;


type FirstElementFunction<T> = (arr: T[]) => T | undefined;

const firstElement: FirstElementFunction<string> = (arr) => arr[0];
//This declaration creates a function that only works with types which are declared during decalration. Its not reusable like the previous one.

const firstElementFunction: FirstElementFunction<number> = (arr) => arr[0];// best case for reusable function with specific type
