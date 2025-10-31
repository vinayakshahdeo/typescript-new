/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let name: any = 'vinayak';
name = 123;
name = [];
console.log(name);
function returnParam(param) {//Parameter 'param' implicitly has an 'any' type.
	return param;
}

function multiplyByTwo(number: unknown) {
	if (typeof number === 'number') {
		return number * 2;
	}
	return 'Please provide a valid number';
}

console.log(multiplyByTwo(8));
console.log(multiplyByTwo('hello'));