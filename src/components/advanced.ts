function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

/* Sub types and Super types */
//this is a super type for Employee and student
type Person = {
  name: string;
  age: number;
};

//sub type of Person
type Employee = Person & {
  departmentId: string;
  department: string;
};
//sub type of Person
type student = Person & {
  grade: string;
  studentId: string;
};

function greet(person: Person): string {
  return `Hello, ${person.name} and you are ${person.age} years old.`;
}

const emp: Employee = {
  name: 'Alice',
  age: 30,
  departmentId: 'D001',
  department: 'Engineering',
};

const stud: student = {
  name: 'Bob',
  age: 20,
  grade: 'A',
  studentId: 'S001',
};

// print(greet(emp)); // Valid
// print(greet(stud)); // Valid
greet(emp);
greet(stud);
/* print(greet({
	name: 'Alice',
	age: 30,
	departmentId: 'D001',
	department: 'Engineering',
})); */ // InValid Object literal may only specify known properties, and 'departmentId' does not exist in type 'Person'.

/* Type Soundness */
// A type system is sound if it guarantees that a program will not perform any operation that is not allowed by its type annotations at runtime.
// TypeScript is designed to be a sound type system, meaning that if a program type-checks successfully, it should not encounter type-related errors at runtime.
// However, there are some scenarios where TypeScript's type system may not be completely sound, such as when using type assertions or the any type.

const value: unknown = 'Hello, TypeScript!';

// Using type assertion to tell the compiler that we know the type of value
const strLength: number = (value as string).length; // This will compile, but will cause a runtime error
console.log(strLength);

type User = {
  name: string;
  age: number;
};

const user = { name: 'John', age: 25, address: '123 Main St' };
const newUser: User = user; // Excess property 'address' is ignored

function getUser(user: User): string {
  return `Name: ${user.name}, Age: ${user.age}`;
}

print(getUser(newUser)); // Valid at compile time, but 'address' is not part of User type
// print(getUser({ name: "John", age: 25, address: "123 Main St" })); // InValid Object literal may only specify known properties, and 'address' does not exist in type 'User'.
// The above line would cause a compile-time error, but the previous assignment to newUser bypasses that check.

type Animal = { name: string };
type Dog = Animal & { breed: string };

const myDog: Dog = { name: 'Buddy', breed: 'Golden Retriever' };
const myAnimal: Animal = myDog; // Valid: Dog is a subtype of Animal

const handleAnimal = (animal: Animal) => {
  print(animal.name);
};

const handleDog = (dog: Dog) => handleAnimal(dog);

handleDog({ name: 'Max', breed: 'Beagle' }); // Valid at compile time

print((myAnimal as Dog).breed); // Valid at compile time, but may cause runtime error if myAnimal is not actually a Dog
// The above line uses type assertion to treat myAnimal as a Dog, which may not be safe if myAnimal does not have the breed property at runtime.

function logNumber(...numbers: number[]): void {
  print(...numbers);
}

logNumber(1, 2, 3); // Valid
logNumber(); // Valid but no arguments passed
// logNumber(1,'two',3); // InValid Argument of type 'string' is not assignable to parameter of type 'number'.

function runFunction(func: () => void) {
  func();
}

const getPI = (): number => 3.14;

runFunction(getPI); // InValid Argument of type '() => number' is not assignable to parameter of type '() => void'.
// Type 'number' is not assignable to type 'void'. but it will run without error at runtime

/* Nominal Vs Structural Type System */

interface Ball {
  diameter: number;
  // color: string; // adding this property will make Ball and Sphere incompatible
}
interface Sphere {
  diameter: number;
}

let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 10 };

// since they have same structure, they are compatible in structural type system hence we can assign one to another

ball = sphere; // Valid
sphere = ball; // Valid

interface Tube {
  length: number;
  diameter: number;
}

const tube: Tube = { length: 20, diameter: 5 };

ball = tube; // it is valid because Tube has all properties of Ball
// but if we add a property to the interface then it will make them incompatible
// tube = ball; // InValid Type 'Ball' is not assignable to type 'Tube'. Object literal may only specify known properties, and 'length' does not exist in type 'Tube'.

// creating an intersection type to simulate nominal typing

type ValidatedInputString = string & { __brand: 'ValidatedInputString' };
const validateUserInput = (input: string) => {
  const simpleValidatedInput: string = input.trim();
  return simpleValidatedInput as ValidatedInputString;
};

const printName = (name: ValidatedInputString): void => {
  print(`Name: ${name}`);
};
printName(validateUserInput('   John Doe   '));
// printName('   Jane Smith   ');
/* Argument of type 'string' is not assignable to parameter of type 'ValidatedInputString'.
  Type 'string' is not assignable to type '{ __brand: "ValidatedInputString"; }'. */

/* Type Widening and Type Narrowing */

const welcomeString = 'Welcome to TypeScript'; // TypeScript infers the type as welcome to typescript as it cant be changed in const

let replyString = 'Hi'; // typeScript infers the type as string as it can be changed in let
replyString = 'Hello';

let unionString: string | undefined;
// unionString.length;Expected an assignment or function call and instead saw an expression.
if (unionString) {
  print(unionString.length); // Type narrowing now we know unionString is string
}
