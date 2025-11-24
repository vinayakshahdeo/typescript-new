/* classes are factories to genrate similar kind of objects */

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
