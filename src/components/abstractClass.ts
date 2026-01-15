/* Abstract Classes */
//abstract classes cant be initialized directly

type Holidays = { date: Date; reason: string };

abstract class Department {
  protected abstract holidays: Holidays;
  constructor(protected name: string) {}

  describe(this: Department) {
    return `Department: ${this.name}`;
  }
}

// const department = new Department('Accounting'); // Error: Cannot create an instance of an abstract class.

class ITDepartment extends Department {
  protected holidays: Holidays = { date: new Date('2024-12-25'), reason: 'Christmas' };
  constructor() {
    super('IT');
  }
}

const ITDepartmentInstance = new ITDepartment();
ITDepartmentInstance.describe(); // Output: Department: IT
class AdminDepartment extends Department {
  protected holidays: Holidays = { date: new Date('2024-01-01'), reason: 'New Year' };
  constructor() {
    super('Admin');
  }
}
