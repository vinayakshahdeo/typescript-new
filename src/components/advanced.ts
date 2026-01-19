// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
