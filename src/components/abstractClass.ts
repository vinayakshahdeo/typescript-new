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
const itDepartment = new ITDepartment();
