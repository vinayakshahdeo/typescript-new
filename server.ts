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