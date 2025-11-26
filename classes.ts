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

console.log(user1.greet()); // Hello, my name is Alice and I am 25 years old.
console.log(user2.greet()); // Hello, my name is Bob and I am 28 years old.

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
console.log(emp1.getDetails()); // Name: Charlie, Department: IT
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
console.log(mgr1.getDetails()); // Name: David, Department: HR
console.log(mgr1.manageTeam()); // David is managing the HR department.
// console.log(mgr1.salary); // Error: Property 'salary' is private and only accessible within class 'Employee'.
// console.log(mgr1.department); // Error: Property 'department' is protected and only accessible within class 'Employee' and its subclasses.
