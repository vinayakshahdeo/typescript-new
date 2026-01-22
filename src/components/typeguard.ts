function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function print<T extends unknown[]>(...params: T): T {
// 	return params;
// }

/* Type Guards */

/* Type guards are used to narrow down the type of a variable within a conditional block */

function printStrings(string: string | string[] | null): void {
  if (typeof string === 'string') {
    print('Single string:', string);
  } else if (Array.isArray(string)) {
    print('Array of strings:', string.join(', '));
  } else {
    print('No string provided');
  }
}

printStrings('Hello, Type Guards!');
printStrings(['Hello', 'Type', 'Guards']);
printStrings(null);

/* Truthiness Narrowing */
type Person = {
  name: string;
  age?: number;
};

function printAge(person: Person): void {
  if (person.age) {
    //typescript infers that age is number here
    print(`${person.name} is ${person.age} years old.`);
  } else {
    print(`${person.name}'s age is unknown.`);
  }
}

const person1: Person = { name: 'Alice', age: 30 };
const person2: Person = { name: 'Bob' };

printAge(person1);
printAge(person2);
