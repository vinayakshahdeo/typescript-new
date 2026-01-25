import { add } from '../js/declared.js';
import { User } from '../js/user.js';

// Here's an example of a declaration file for a hypothetical `math` library:

function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function print<T extends unknown[]>(...params: T): T {
// 	return { ...params } as T;
// }
// declare namespace math {
// 	export function add(a: number, b: number): number;
// 	export function subtract(a: number, b: number): number;
// 	export function multiply(a: number, b: number): number;
// 	export function divide(a: number, b: number): number;
// }

// This declaration tells TypeScript that the `math` library has four functions: `add`, `subtract`, `multiply`, and `divide`.
// Each of these functions takes two numbers as input and returns a single number.

// To use this declaration file, you would need to add it to your project's type definitions using the `--declaration` flag:
// tsc --declaration

// This will generate a `math.d.ts` file that can be used by TypeScript to understand the types and interfaces of the `math` library.

//js file
// export function add(a, b) {
// 	return a + b;
// }
//create a .d.ts file with js file name and export it so that when js function when imported in ts file will be able to use it

print(add(2, 6));
print(add(2, ' vinayak'));
print('vinayak ', 2);
print('vinayak', ' shahdeo');

const newUser = User.createUser(10, 'Vinayak Shahdeo');
print(newUser);
const secondUser = User.updateUser(1, newUser);
print(secondUser);
