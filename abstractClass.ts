/* Abstract Classes */
//abstract classes cant be initialized directly
abstract class Department {
	constructor(protected name: string) { }

	describe(this: Department) {
		console.log(`Department: ${this.name}`);
	}
}

// const department = new Department('Accounting'); // Error: Cannot create an instance of an abstract class.

class ITDepartment extends Department {
	constructor() {
		super('IT');
	}

}

const ITDepartmentInstance = new ITDepartment();
ITDepartmentInstance.describe(); // Output: Department: IT