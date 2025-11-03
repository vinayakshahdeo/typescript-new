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
//strict object type checking
// let post: { title: string; content: string; date: Date; } = {
// 	title: 'this is a blog post',
// 	content: 'this is the content of the blog post',
// 	date: new Date()
// };
// console.log(post);
type author = {
	name: string;
	email: string;
	age: number;
};
type Post = {
	title: string;
	content: string;
	date: Date;
	author?: author; //optional property
};

let post: Post = {
	title: 'this is a blog post',
	content: 'this is the content of the blog post',
	date: new Date()
};

console.log(post);

/*nested object types*/
let post2: Post = {
	title: 'this is another blog post',
	content: 'this is the content of another blog post',
	date: new Date(),
	author: {
		name: 'Jane Smith',
		email: 'jane@example.com',
		age: 30
	}
};
console.log(post2);

/*objects whose property are unknown at compile time*/

type ExperienceDetails = {
	name: string;
	duration: number; //duration in years
};

type Experience = {
	[key: string]: ExperienceDetails; //index signature using key of string type

};
type Employee = {
	[id: number]: string; //index signature
	name: string;
	title: string;
	experience: Experience;
};

let employee: Employee = {
	1: 'emp001',
	name: 'Alice Johnson',
	title: 'Software Engineer',
	experience: {
		job1: {
			name: 'Company A',
			duration: 2
		},
		job2: {
			name: 'Company B',
			duration: 3
		}
	}
};
console.log(employee);
/*optional and readonly properties*/

type Book = {
	readonly isbn: string; //readonly property
	title: string;
	category?: string; //optional property
};
let book: Book = {
	isbn: '978-3-16-148410-0',
	title: 'TypeScript Basics'
};
let anotherBook: Book = {
	isbn: '978-1-23-456789-0',
	title: 'Learning JavaScript',
	category: 'Programming'
};
console.log(book);
// book.isbn = '123-4-56-789012-3';//Error: Cannot assign to 'isbn' because it is a read-only property.
book.title = 'Advanced TypeScript';
console.log(book);
anotherBook.category = 'Web Development';
console.log(anotherBook);
/*union types with objects*/

type Circle = {
	radius: number;
};

type Rectangle = {
	width: number;
	height: number;
};

type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
	if ('radius' in shape) {
		return Math.PI * shape.radius * shape.radius; //area of circle
	} else {
		return shape.width * shape.height; //area of rectangle
	}
}

const myCircle: Circle = { radius: 5 };
const myRectangle: Rectangle = { width: 4, height: 6 };

console.log(`Area of Circle: ${calculateArea(myCircle)}`);
console.log(`Area of Rectangle: ${calculateArea(myRectangle)}`);

type Dog = {
	name: string;
	barks: boolean;
	wags: boolean;
	breed: string;
};

type Cat = {
	name: string;
	meows: boolean;
	scratches: boolean;
	color: string;
};

type DogAndCatUnion = Dog | Cat;

let dogs: DogAndCatUnion = {
	name: 'Buddy',
	barks: true,
	wags: true,
	breed: 'Golden Retriever'
};
console.log(dogs);

let cats: DogAndCatUnion = {
	name: 'Whiskers',
	meows: true,
	scratches: true,
	color: 'Tabby'
};
console.log(cats);

let hybridAnimal: DogAndCatUnion = {
	name: 'Mystery',
	barks: true,
	wags: false,
	meows: true,
	breed: 'Mixed',
	color: 'Gray'
};//need to have all properties of either Dog or Cat to avoid error comment out breed or color to see the error
console.log(hybridAnimal);

/* Discriminating Union Types using index signature  */

type NetworkLoadingState = {
	state: "loading";
};

type NetworkFailedState = {
	state: "failed";
	code: number;
};

type NetworkSuccessState = {
	state: "success";
	response: { title: string; duration: number; summary: string; };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function handleNetworkState(state: NetworkState) {
	let response: string = '';
	switch (state.state) {
		case "loading":
			response = "The network request is loading...";
			break;
		case "failed":
			response = `Network request failed with code: ${state.code}`;
			break;
		case "success":
			response = `Network request succeeded with response: state.response`;
			break;
	}
	return response;
}
console.log(handleNetworkState({ state: 'loading' }));
console.log(handleNetworkState({ state: 'failed', code: 404 }));
console.log(handleNetworkState({ state: 'success', response: { title: 'TypeScript Guide', duration: 120, summary: 'A comprehensive guide to TypeScript.' } }));

/* object intersection types */
//refer cat and dog types above

type Pet = Cat & Dog;

let myPet: Pet = {
	name: 'Fluffy',
	barks: true,
	wags: true,
	meows: true,
	scratches: false,
	breed: 'Husky',
	color: 'Silver'
};//need to have all properties of both Dog and Cat to avoid error basically it takes common properties of both types and creates a new type with all properties
console.log(myPet);