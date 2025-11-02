// Define a person object type
type Person = {
	name: string;
	age: number;
};

const person1: Person = {
	name: "John Doe",
	age: 30,
};
console.log(person1);

// Define an animal interface
interface Animal {
	type: "dog" | "cat";
}

function introduceAnimal(animal: Animal): void {
	console.log(`My animal is a ${animal.type}.`);
}

const dog: Animal = {
	type: "dog",
};
introduceAnimal(dog);

// let car: {} = same as let car:Object which means car can be any non-primitive type which can have properties attached to it which you cannot control
//car=[];
//to fix above issue we use interfaces
/* interface Car {
	make: string;
	model: string;
	year: number;
} */

type Car = {
	make: string;
	model: string;
	year: number;
};

let car: Car = {
	make: 'Toyota',
	model: 'Corolla',
	year: 2020
};
// console.log(car);
// car = [];//Error: Type 'any[]' is not assignable to type 'Car'.
