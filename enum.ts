enum Color {
	Red = 1,
	Blue = 2,
	Green = 4,
	Yellow = 8,
}
const arr: ReadonlyArray<Color> = [Color.Red, Color.Blue, Color.Green];
console.log(arr); // Output: [1, 2, 4]

let myObject: { [x: string]: number; } = {};
myObject["key"] = 42;
// Error! Cannot create a writable property. Use ReadonlyArray<Color> instead of Object.

type MyEnum =
	| "A"
	| "B"
	| "C";
const myEnums: MyEnum[] = ["A", "B", "C"];
console.log(myEnums); // Output: ["A", "B", "C"]

interface MyInterface {
	name: string;
}
const myInterfaceArray: ReadonlyArray<MyInterface> = [
	{ name: "John" },
	{ name: "Jane" }
];
console.log(myInterfaceArray);

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
