// commented for clean out console
// console.log('hello worlds');

const students = [{ name: 'John', score: 70 }, { name: 'Mark', score: 90 }];
for (const student of students) {
	// commented for clean out console
	// console.log("Name:", student.name);
	// console.log("Score:", student.score);
}



//first ts function
//@ts-ignore
function addNumbers(a, b) {
	return a + b;
}

console.log(addNumbers(2, 4));
console.log(addNumbers('100', 2));

function addNumber(a: number, b: number) {
	return a + b;
}

console.log(addNumber(2, 4));
console.log(addNumber('100', 2));
//throws index.ts:27:23 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.