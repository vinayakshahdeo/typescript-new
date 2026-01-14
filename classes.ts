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
//new Book instance
const grimm = new Book('valorant', 'chamber', '36 kills', 1994);

// logBookDetails(grimm);

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
// logBookDetails(ebook1);
/* Access Modifiers */
// only accesible within typescipt class
// private class members are not accessible outside the class
// protected class members are accessible within the class and its subclasses
// public class members are accessible from anywhere


/* PUBLIC */
// all class members are public by default
class Car {
	public make: string;
	public model: string;

	constructor(make: string, model: string) {
		this.make = make;
		this.model = model;
	}
	public getCarInfo() {
		console.log(`${this.make} ${this.model}`);
	}
}

const car1 = new Car('Toyota', 'Camry');
// car1.getCarInfo();

class ElectricCar extends Car {
	public batteryCapacity: number;

	constructor(make: string, model: string, batteryCapacity: number) {
		super(make, model);
		this.batteryCapacity = batteryCapacity;
	}
	public getElectricCarInfo() {
		//using this keyword can access parent class members
		console.log(`${this.make} ${this.model} with battery capacity of ${this.batteryCapacity} kWh`);
	}
}

const eCar1 = new ElectricCar('Tesla', 'Model S', 100);
// eCar1.getCarInfo();
// eCar1.getElectricCarInfo();
// console.log(eCar1.batteryCapacity);

class UserProfile {
	public username: string;
	constructor(username: string) {
		this.username = username;
	}
	public displayUsername() {
		console.log(`Username: ${this.username}`);
	}
}

class AdminProfile extends UserProfile {
	public isAdmnin: boolean;
	constructor(username: string, isAdmnin: boolean) {
		super(username);
		this.isAdmnin = isAdmnin;
	}
	public displayAdminStatus() {
		console.log(`${this.username} is ${this.isAdmnin ? '' : 'not '}an admin.`);
	}
}

const adminProfile1 = new AdminProfile('adminUser', true);
const user = new UserProfile('regularUser');
// console.log(user.username);
// console.log(adminProfile1.username);

/* Protected */
// accessible within the class and its subclasses

class Users {
	protected email: string;
	name: string;

	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
	protected getUserInfo() {
		console.log(this.name);
		console.log(this.email);
	}
}
class Admin extends Users { // protected is used to make a property of a parent class available for use in child classes
	public isAdmin: boolean;
	constructor(email: string, name: string, isAdmin: boolean) {
		super(email, name);
		this.isAdmin = isAdmin;
	}
	public getAdminInfo() {
		this.getUserInfo();//accessed protected in child class
		console.log(this.isAdmin);
	}

}

const adminUser = new Admin('test@pokemail.net', 'Admin User', true);
// console.log(adminUser.email); // Error: Property 'email' is protected and only accessible within class 'Users' and its subclasses.
// console.log(adminUser.name); // accessible as name is public
// adminUser.getAdminInfo();//if getAdminInfo is protected it cant be invoked by final instance

/* PRIVATE */

class Employees {
	name: string;
	private projectName: string;
	constructor(name: string, projectName: string) {
		this.name = name;
		this.projectName = projectName;
	}
	public giveProjectInfo() {
		return this.projectName;
	}
}
class Managers extends Employees {
	private isManager: boolean;
	constructor(name: string, projectName: string, isManager: boolean) {
		super(name, projectName);
		this.isManager = isManager;
	}
}

const manager2 = new Managers('vinayak', 'defense', true);
// manager2.projectName;//error TS2341: Property 'projectName' is private and only accessible within class 'Employees'.
// however i can access it using giveProjectInfo() since this is public class
// console.log(manager2.giveProjectInfo());
// console.log(manager2.isManager); //error TS2341: Property 'isManager' is private and only accessible within class 'Managers'.

/* method overriding */

//To Override methods in a child class, you need to create a new method with the same name as the one in the parent class. This new method can have different functionality than the original method in the parent class. The child class version's of the method is called an overridden method or a derived method.

class Person {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	greet(): string {
		return `hello ${this.name}`;
	};
}

const person2 = new Person('vinayak shahdeo');
// console.log(person2.greet());

class PersonWithPets extends Person {
	hasPets: boolean;
	constructor(name: string, hasPets: boolean) {
		super(name);
		this.hasPets = hasPets;
	}
	greet(): string {
		if (this.hasPets) {
			return `hello ${this.name} you have pets woof!!`;
		}
		return `hello ${this.name} you dont have pets thats sad!!`;
	}
}
const person3 = new PersonWithPets('vinayak', false);
// console.log(person3.greet());

/* shorthand for constructors in a class */
class Automobile {
	constructor(public name: string, private car: boolean) { }
	/* this method declares and assigns values for our class members using constructor with access modifiers. */
	getInfo() {
		return `this is a ${this.name}${this.car ? ` and its a car!!` : `.`}`;
	}
}

const tesla = new Automobile("Tesla", true);
// console.log(tesla.getInfo());



class Personn {
	constructor(public firstName: string, public lastName: string, public age: number) {
		//logic to validate age
		if (age < 0 || age > 200) {
			throw new Error('Invalid age range 0-200');
		}
	}
	getInfo() {
		return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
	}
}

const personn1 = new Personn('John', 'Doe', 20);
const personn2 = new Personn('Jane', 'Smith', 50);
// personn1.getInfo();
// personn2.getInfo();
/* ACCESSORS AND MUTATORS */

class Personns {
	private _age?: number;//setter declaration
	constructor(public firstName: string, public lastName: string) {
	}
	public set age(age: number) {//setter method
		if (age < 0 || age > 200) {
			throw new Error('Invalid age range 0-200');
		}
		this._age = age;
	}

	public get age(): number {//getter method
		if (this._age === undefined) {
			throw new Error('Age is not set');
		}
		return this._age;
	}

	public get name(): string {//a getter doesn't require a corresponding setter
		return `${this.firstName} ${this.lastName}`;
	}
}

const johnDoe = new Personns('John', 'Doe');
const janeDoe = new Personns('Jane', 'Doe');
johnDoe.age = 30; // setter called
johnDoe.age = 25;// can be called multiple times
//if age is not set and getter is called it will throw error try by commenting above 2 lines or try janeDoe.age
// console.log(johnDoe.age);

/* STATIC */
class MathUtils {
	static PI: number = 3.14159;// static property belongs to the class itself not to instances

	static calculateCircumference(radius: number): number {
		return 2 * MathUtils.PI * radius;
	}
}

const radius = 5;
const circumference = MathUtils.calculateCircumference(radius);
// console.log(`Circumference of circle with radius ${radius} is ${circumference}`);

class Counter {
	static count: number = 0;

	static increment() {
		Counter.count++;
	}
}
// console.log(Counter.count);
Counter.count++;
// console.log(Counter.count);
Counter.increment();
// console.log(Counter.count);
//now if we create instance of Counter class it wont have count property or increment method
const counterInstance = new Counter();
// console.log(counterInstance.count); // Error: Property 'count' does not exist on type 'Counter'.
// counterInstance.increment(); // Error: Property 'increment' does not exist on type 'Counter'.
// counterInstance.count = 10; // this is instance property not static property

/* static blocks */
class Config {
	static settings: { [key: string]: string; } = {};

	static {//invoked once when the class is loaded into memory
		// static block to initialize static properties
		/* console.log('loaded into memory'); */
		Config.settings['apiUrl'] = 'https://api.example.com';
		Config.settings['timeout'] = '5000';
	}
}

// console.log(Config.settings); // { apiUrl: 'https://api.example.com', timeout: '5000' }

/* Generics With Classes */
class Box<T> {
	private _value: T;

	constructor(value: T) {
		this._value = value;
	}

	get value(): T {
		return this._value;
	}
	set value(value: T) {
		this._value = value;
	}
	getContents(): T {
		return this._value;
	}
}

const stringBox = new Box<string>('Hello, Generics!');
stringBox.value = 'Updated Value';//updating value with setter
// console.log(stringBox.getContents());
const numberBox = new Box<number>(42);

// console.log(stringBox.getContents()); // Hello, Generics!
// console.log(numberBox.getContents()); // 42

type Identifiable = {
	id: number;
};
class Repository<T extends Identifiable> {//union of T with Identifiable type
	private items: T[] = [];

	addItem(item: T): void {
		this.items.push(item);
	}

	getItems(): T[] {
		return this.items;
	}
	getById(number: number): T | undefined {
		return this.items.find((item) => item.id === number);
	}
	getAll(): T[] {
		return this.items;
	}
	removeItem(id: number): void {
		this.items = this.items.filter((item) => item.id !== id);
	}
}
type Userr = Identifiable & {//extending Identifiable type	with additional properties
	name: string;
	email: string;
};

const userrRepo = new Repository<Userr>();
userrRepo.addItem({ id: 1, name: 'Alice', email: 'alice@example.com' });
// newRepo.addItem({ id: 2, name: 'Bob' });//error because class got intialized as Userr type which requires email property
// console.log(userrRepo.getById(1));

const bookRepo = new Repository<Book & Identifiable>();
bookRepo.addItem({ id: 1, title: '1984', author: 'George Orwell', ISBN: '123-456-789' });
// bookRepo.addItem({ id: 1, name: 'Alice', email: 'alice@example.com' });//error because class got intialized as Book & Identifiable type which requires title, author and ISBN property
// console.log(bookRepo.getAll());

