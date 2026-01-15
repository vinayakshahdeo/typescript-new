/* Abstract Classes */
//abstract classes cant be initialized directly

type Holidays = { date: Date; reason: string }[];

abstract class Department {
  protected abstract holidays: Holidays;
  constructor(protected name: string) {}

  describe(this: Department) {
    return `Department: ${this.name}`;
  }

  public addHolidays(holidays: Holidays) {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
  printHolidays() {
    return this.holidays;
  }
}
// const department = new Department('Accounting'); // Error: Cannot create an instance of an abstract class.

class ITDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('IT Department');
  }
}
class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('Admin Department');
  }
}

const itHolidays: Holidays = [
  { date: new Date('2026-12-25'), reason: 'Christmas' },
  { date: new Date('2026-01-01'), reason: 'New Year' },
];

const adminHolidays: Holidays = [
  { date: new Date('2026-12-10'), reason: 'Admin Department Day' },
  { date: new Date('2026-01-01'), reason: 'New Year' },
];

const itDepartment = new ITDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

console.log(itDepartment.printHolidays());
console.log(adminDepartment.describe());
