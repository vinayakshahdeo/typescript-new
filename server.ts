/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
let name: any = 'vinayak';
name = 123;
name = [];
console.log(name);
function returnParam(param) {//Parameter 'param' implicitly has an 'any' type.
	return param;
}
