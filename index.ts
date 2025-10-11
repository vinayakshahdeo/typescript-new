// commented for clean out console
// console.log('hello worlds');

const students = [
  { name: 'John', score: 70 },
  { name: 'Mark', score: 90 },
];
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

console.log(addNumbers(2, 4)); //6
console.log(addNumbers('100', 2)); // this will not throw error in js but in ts it will throw error as below

function addNumber(a: number, b: number) {
  return a + b;
}

console.log(addNumber(2, 4));
// console.log(addNumber('100', 2));
//throws index.ts:27:23 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

//string types

const firstName = 'vinayak';
console.log(firstName);
// firstName = 10;//index.ts:33:1 - error TS2322: Type 'number' is not assignable to type 'string'.

const automobile = 'Audi'; // this is known as an annotation
console.log(automobile);

const city = 'Ranchi'; //primitive type as const infers is as a tpe in this case type is Ranchi;
console.log(city);
const studentAsArray: string[] = students.map((student) => JSON.stringify(student));
console.log(studentAsArray);

/**Number Types**/
// var age: number = 'Vinu';//index.ts:43:5 - error TS2322: Type 'string' is not assignable to type 'number'.
const year = 2025;
console.log(year);
const numberOfPeople = 0;
console.log(numberOfPeople);
// numberOfPeople = 120;//error TS2588: Cannot assign to 'numberOfPeople' because it is a constant.
const stringToNumber = '';
console.log(stringToNumber);
