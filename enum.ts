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
type ReadOnlyTupleType = readonly [string, 'male' | 'female', number];
let personInfo: ReadOnlyTupleType = ['John Doe', 'male', 28];
// personInfo[1] = 'other'; // Error: Cannot assign to '1' because it is a read-only property.
/* objects with specific property types*/
/* logged in late at night so adding this last example */
type ReadOnlyPersonTuple = readonly [string, string, number];

const employee: ReadOnlyPersonTuple = ['John Doe', 'Male', 30];
// employee[0] = 'Jane Doe'; // Error: Cannot assign to '0' because it is a read-only property.
// console.log(personInfo);

type ReadOnlyName = string;
const myName: ReadOnlyName = 'Alice';
let anotherName = myName.toUpperCase();
// console.log({ myName, anotherName });
//teaching moment: primitive types like string, number, boolean are immutable in nature in JavaScript/TypeScript. So even if we declare a variable with const or let, the value itself cannot be changed. However, we can create new variables based on the original value, as shown in the example above.
// myName = 'Bob'; // Error: Cannot assign to 'myName' because it is a constant or a read-only variable.
// myName[0] = 'A'; console.log(myName); // No error, but this does not change the original string as strings are immutable in JavaScript/TypeScript
//readonly strings and readonly arrays
type ReadOnlyString = Readonly<string>; // This creates a new type is a-only version of the type.
let greeting: ReadOnlyString = 'Hello, World!';
// console.log(greeting);
type ReadOnlyArray2 = ReadonlyArray<string | number>; // This creates a new type that represents an array with read-only elements.
const numbersArray: ReadOnlyArray2 = [1, 2, 3, 4, 'John Doe'];
type ReadOnlyTupleType2 = readonly [string, number]; //This creates a new type that represents a tuple with a specific length and types for each element
const personTuple: ReadOnlyTupleType2 = ['Alice', 25];
// console.log(numbersArray);
// console.log(personTuple);
/* ENUMS */
enum Direction {
	North,
	East,
	South,
	West
}
let myDirection: Direction = Direction.North;
// console.log(myDirection); // Output: 0 Acts as Index Value which can't be changed
// Direction.North = 'North'; // Error: Cannot assign to 'North' because it is a read-only property.

enum Direction2 {
	Up = 1,
	Down,
	Left,
	Right
}
// console.log(Direction2.Right);// Output: 4
enum Roles {
	Admin = 'ADMIN',
	User = 'USER',
	Guest = 'GUEST',
	Author = 'Author'
}

type Person = {
	name: string;
	role: Roles;
	email: string;
	password: string;
};
let myRole: Roles = Roles.Admin;
// console.log(myRole); // Output: 'ADMIN'
let person: Person = {
	name: 'John Doe',
	role: Roles.User,
	email: 'john@example.com',
	password: 'password'
};
// console.log(person); // Output: { name: 'John Doe', role: 'USER', email:'john@example.com, password: 'password' }
// * Enums can be hetrogeneous */
enum Direction3 {
	Up = 1,
	East = 'EAST',
	South = 3,
	West = 'WEST'
}
let anotherDirection: Direction3 = Direction3.East;
// console.log(anotherDirection); // Output: 'EAST'

/* enums compilation */
enum Status {
	Active,
	Inactive,
	Pending
}
let userStatus: Status = Status.Active;
// console.log(userStatus); // Output: 0 check js file for compiled code

/* Enums vs Objects */

const enum Edirection {//not compiled to JS code as an object to be used for very large enums to reduce runtime overhead
	Up,
	Down,
	Left,
	Right,
};
let eDirection: Edirection = Edirection.Left;

const oDirection = {
	Up: 0,
	Down: 1,
	Left: 2,
	Right: 3,
} as const;// these properties are readonly and can't be changed
// oDirection.Left = 5; // Error: Cannot assign to 'Left' because it is a read-only property.
/* nested enums */
enum Epermission {
	Read = 1 << 0, // 1
	Write = 1 << 1, // 2
	Execute = Read << Write, // 4
	Edit = Write | Execute, // 6 | acts as addition
}
// console.log(Epermission.Execute);// Output: 4
// console.log(Epermission.Edit);// Output: 6

/* enum unions */

enum Shapes {
	Circle = 'Circle',
	Square = 'Square'
};// string enums

type Circle = { kind: Shapes.Circle, radius: number; };// union type for circle objects
type Square = { kind: Shapes.Square, sideLength: number; }; // union for type objects square

// let circle: Circle = { kind: Shapes.Square, radius: 10 };//enums are acting as type guards here hence wont allow wrong assignment
function printShapeInfo(shape: Shapes): void {
	console.log(shape);
}
const myCircle: Circle = { kind: Shapes.Circle, radius: 10 };
const mySquare: Square = { kind: Shapes.Square, sideLength: 5 };
printShapeInfo(myCircle.kind);
//printShapeInfo('rectangle');// Error: Argument of type '"rectangle"' is not assignable to parameter of type 'Shapes'.
printShapeInfo('rectangle' as Shapes); // Using type assertion to bypass type checking (not recommended)

