/* classes are factories to genrate similar kind of objects */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
class User {
	name = 'john doe';
	age = 30;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	greet() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
}

const user1 = new User('Alice', 25);
const user2 = new User('Bob', 28);

// console.log(user1.greet()); // Hello, my name is Alice and I am 25 years old.
// console.log(user2.greet()); // Hello, my name is Bob and I am 28 years old.

/* class with public, private and protected modifiers */
class Employee {
	public name: string;	// Public by default
	private salary: number; // Private
	protected department: string; // Protected

	constructor(name: string, salary: number, department: string) {
		this.name = name;
		this.salary = salary;
		this.department = department;
	}

	public getDetails() {
		return `Name: ${this.name}, Department: ${this.department}`;
	}

	private getSalary() {
		return this.salary;
	}
}

const emp1 = new Employee('Charlie', 50000, 'IT');
// console.log(emp1.getDetails()); // Name: Charlie, Department: IT
// console.log(emp1.getSalary()); // Error: Property 'getSalary' is private and only accessible within class 'Employee'.

/* inheritance in classes */
class Manager extends Employee {
	constructor(name: string, salary: number, department: string) {
		super(name, salary, department);
	}

	public manageTeam() {
		return `${this.name} is managing the ${this.department} department.`;
	}
}

const mgr1 = new Manager('David', 80000, 'HR');
// console.log(mgr1.getDetails()); // Name: David, Department: HR
// console.log(mgr1.manageTeam()); // David is managing the HR department.
// console.log(mgr1.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
// console.log(mgr1.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.

/* Classes as Types */

class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

function printPoint(point: Point) {
	// console.log(`X: ${point.x}, Y: ${point.y}`);
}

// const pt: Point = new Point(10, 20); // explicit type annotation as class Point is also a type
const pt = new Point(10, 20); // implicit type annotation
printPoint(pt); // X: 10, Y: 20

// pt.z = 30; // Error: Property 'z' does not exist on type 'Point'.

/* Optional and Readonly Properties */
class Rectangle {
	readonly width: number;
	readonly height: number;
	color?: string; // optional property

	constructor(width: number, height: number, color?: string) {
		this.width = width;
		this.height = height;
		if (color) {
			this.color = color;
		}
	}

	public getArea() {
		return this.width * this.height;
	}
}

const rect1 = new Rectangle(10, 20, 'red');
// console.log(`Area: ${rect1.getArea()}`); // Area: 200
// console.log(`Color: ${rect1.color}`); // Color: red
// console.log(rect1.height); // 20
// rect1.width = 15; // Error: Cannot assign to 'width' because it is a read-only property.

/* Inheritance with classes and ts */
class Animal {
	species: string;

	constructor(species: string) {
		this.species = species;
	}

	public makeSound() {
		return `${this.species} makes a sound.`;
	}
}

class Dog extends Animal {
	breed: string;

	constructor(breed: string) {
		super('Dog');
		this.breed = breed;
	}

	public makeSound() {
		return `${this.breed} barks.`;
	}
}

const dog1 = new Dog('Labrador');
// console.log(dog1.makeSound()); // Labrador barks.
// console.log(dog1.species); // Dog
/* classes can only inherit 1 class, not multiple either in ts nor in js */

// adding admin property to User class using inheritance
class AdminUser extends User {
	isAdmin: boolean;

	constructor(name: string, age: number, isAdmin: boolean) {
		// super();  // Expected 2 arguments, but got 0.ts(2554)
		super(name, age); // calling parent class constructor
		// refactored to use existing user as base
		// super can be called only once
		this.isAdmin = isAdmin;
	}

	public getAdminStatus() {
		return this.isAdmin ? `${this.name} is an admin.` : `${this.name} is not an admin.`;
	}
}

const admin1 = new AdminUser('Eve', 35, true);
// console.log(admin1.greet()); // Hello, my name is Eve and I am 35 years old.
// console.log(admin1.getAdminStatus()); // Eve is an admin.
// cretaing an existing user as admin user
const userAsAdmin = new AdminUser(user1.name, user1.age, false);
// console.log(userAsAdmin.greet()); // Hello, my name is John Doe and I am 30 years old.
// console.log(userAsAdmin.getAdminStatus()); // John Doe is not an admin.

/* Summary:
- Classes are blueprints for creating objects with properties and methods.
- Access modifiers (public, private, protected) control visibility of class members.
- Inheritance allows classes to extend other classes, inheriting their properties and methods.
- Classes can also be used as types for type annotations.
- Optional and readonly properties enhance class flexibility and safety.
*/

/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 *
 * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */

class Book {
	title: string;
	author: string;
	yearPublished?: number;
	readonly ISBN: string;

	constructor(title: string, author: string, ISBN: string, yearPublished?: number) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		if (yearPublished) {
			this.yearPublished = yearPublished;
		}
	}
}

function logBookDetails(book: Book): void {
	console.log(`Title: ${book.title}`);
	console.log(`Author: ${book.author}`);
	console.log(`ISBN: ${book.ISBN}`);
	if (book.yearPublished) {
		console.log(`Year Published: ${book.yearPublished}`);
	} else {
		console.log('Year Published: N/A');
	}
}

const grimm = new Book('valorant', 'chamber', '36 kills', 1994);

logBookDetails(grimm);

class Ebook extends Book {
	fileSize: number;
	format: string;
	constructor(fileSize: number, title: string, author: string, ISBN: string, format: string, yearPublished?: number) {
		super(title, author, ISBN, yearPublished);
		this.fileSize = fileSize;
		this.format = format;
	}
}

const ebook1 = new Ebook(500, 'Digital Fortress', 'Dan Brown', '123-456-789', 'PDF', 1998);
logBookDetails(ebook1);