/* Abstract Classes */
//abstract classes cant be initialized directly
type Holiday = { date: Date; reason: string };
type Holidays = Holiday[];

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
    if (this.holidays.length === 0) {
      return 'No holidays added.';
    }
    this.holidays.forEach((holiday: Holiday, index: number) => {
      console.log(`${index + 1} ${holiday.reason} on ${holiday.date.toDateString()}`);
    });
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
  { date: new Date('2026-01-01'), reason: 'New Year' },
  { date: new Date('2026-12-25'), reason: 'Christmas' },
];

const adminHolidays: Holidays = [
  { date: new Date('2026-01-01'), reason: 'New Year' },
  { date: new Date('2026-12-10'), reason: 'Admin Department Day' },
];

const itDepartment = new ITDepartment();
const adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itHolidays);
adminDepartment.addHolidays(adminHolidays);

// itDepartment.printHolidays();
// console.log(adminDepartment.describe());
