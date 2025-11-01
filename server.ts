/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*any*/

let name: any = 'vinayak';
name = 123;
name = [];
console.log(name);

/*unknown*/

// function returnParam(param) {//Parameter 'param' implicitly has an 'any' type.
// 	return param;
// }

function multiplyByTwo(number: unknown) {
	if (typeof number === 'number') {
		return number * 2;
	}
	return 'Please provide a valid number';
}

console.log(multiplyByTwo(8));
console.log(multiplyByTwo('hello'));

/*type aliases*/

type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = symbol;

let firstName: CustomString = 'vinayak';//type alias used as typescript converted it to string
console.log(firstName);

let age: CustomNumber = 39;//type alias used as typescript converted it to number
console.log(age);

let today: CustomDate = new Date();//type alias used as typescript converted it to Date
console.log(today);

let sym: CustomSymbol = Symbol('my symbol');//type alias used as typescript converted it to symbol
console.log(sym);

/*duck typing*/
//above code is a declaration of type aliases in TypeScript, which allows you to create custom names for existing types. This can enhance code readability and maintainability by providing more meaningful names for types used in your code.

//duck typing is a concept in TypeScript (and other programming languages) where the type or class of an object is determined by the methods and properties it has, rather than its actual type or class. In other words, "if it looks like a duck and quacks like a duck, it's a duck."
function addNumbers(n1: number, n2: number) {
	return n1 + n2;
}
//inferered as (n1: number, n2: number) => number hence duck typing since finalResult is a number
let finalResult = addNumbers(10, 20);
console.log(finalResult);

/*union types*/
let mixedType: number | string;
mixedType = 20;
console.log(mixedType);
mixedType = 'vinayak';
console.log(mixedType);
// mixedType = false;//error TS2322: Type 'boolean' is not assignable to type 'string | number'.
function print(input?: string | undefined) {
	if (input)
		console.log(input);
	console.log('Please give input to print');
}
print();
print('Hello TypeScript');