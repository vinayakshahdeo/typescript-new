enum Color {
	Red = 1,
	Blue = 2,
	Green = 4,
	Yellow = 8,
}
const arr: ReadonlyArray<Color> = [Color.Red, Color.Blue, Color.Green];
// console.log(arr); // Output: [1, 2, 4]

let myObject: { [x: string]: number; } = {};
myObject["key"] = 42;
// Error! Cannot create a writable property. Use ReadonlyArray<Color> instead of Object.

type MyEnum =
	| "A"
	| "B"
	| "C";
const myEnums: MyEnum[] = ["A", "B", "C"];
// console.log(myEnums); // Output: ["A", "B", "C"]

interface MyInterface {
	name: string;
}
const myInterfaceArray: ReadonlyArray<MyInterface> = [
	{ name: "John" },
	{ name: "Jane" }
];
// console.log(myInterfaceArray);

type MyComputedEnum =
	| 1
	| 2
	| "three"
	| (() => number);
const computedEnums: MyComputedEnum[] = [1, 2, "three", () => 4];

// Error! Cannot add new properties to an interface.
interface MyInterface {
	age?: number;
}
/* strictly typing arrays */
let myArray: Array<number> = [1, 2, 3];
let numberArray: number[] = [4, 5, 6];
let stringArray: Array<string> = ['a', 'b', 'c'];
let booleanArray: boolean[] = [true, false, true];
let mixedArray: Array<number | string | boolean> = [1, 'two', 3, true, 'four'];
let mixedTypeArray: (number | string | boolean)[] = [5, 'six', false, 7, 'eight'];

type airplane = {
	model: string;
	year: number;
	isActive: boolean;
};
//array of airplane objects strictly typed
let airplaneArray: airplane[] = [
	{ model: 'Boeing 747', year: 1998, isActive: true },
	{ model: 'Airbus A320', year: 2005, isActive: false }
];
/* Tuples */
// tuples are fixed-length arrays with specified types for each element
/* problem statement create a strictly typed Array of fixed length and fixed values*/
// let tupleExample: (string | number | boolean)[] = [1, 'Hello', true];// doesn't enforce fixed length and types
//correct way to define tuple

let tupleExample: [number, string, boolean] = [1, 'Hello', true];
// tupleExample.push(4); // Error: Tuple type '[number, string, boolean]' of length '3' has no element at index '3'.
// console.log(tupleExample); //[1, 'Hello', true]
let tupleExample2: [string, number, string?] = ['Age', 30];// added an optional element to the end
// tupleExample2.push('years');// now we can add the optional element
//try adding beyond optional element
// tupleExample2.push('extra');// Error: Tuple type '[string, number, string?]' of length '2' has no element at index '3'.

//adding a wrong type in place of optional element
// tupleExample2.push(true);// Error: Argument of type 'boolean' is not assignable to parameter of type 'string | undefined'.

type Student = {
	name: string;
	age: number;
	isEnrolled: boolean;
};
// type ListOfStudents = [number, string, ...Student[],...number[]]; //rest can only be used with last element of tuple as it can take variable number of elements but doest enforce fixed length
type ListOfStudents = [number, string, ...Student[]]; //tuple of 3 Student objects

let studentsList: ListOfStudents = [
	3,
	'Class A',
	{ name: 'Alice', age: 20, isEnrolled: true },
	{ name: 'Bob', age: 22, isEnrolled: false },
	{ name: 'Charlie', age: 21, isEnrolled: true }
];
// let studentsList: ListOfStudents = [
// 	3,
// 	'Class A'
// ];// this also works as only first two elements are mandatory and rest operator type becomes optional by default and can be used at any location of the tuple
// console.log(studentsList);
/* Read Only Array */
let readOnlyArray: ReadonlyArray<number> = [1, 2, 3, 4, 5];
let readonlyArray2: readonly number[] = [6, 7, 8, 9, 10];
// number.push(6); // Error: Property 'push' does not exist on type 'readonly number[]'.
// /*  Read Only Tuple  */
let readOnlyTuple: readonly [string, number] = ['Age', 25];
// readOnlyTuple[0] = 'New Age'; // Error: Cannot assign to '0' because it is a read-only property.
