/* Interface */
// interfaces are binding contracts between two components
// they define the structure of an object
// they are used to define the shape of an object
// they are used to define the shape of a function
// they are used to define the shape of a class

//interfaces are similar to type aliases but they can be extended and implemented
// interfaces can only be used to define the shape of an object or a function
// type aliases can be used to define the shape of any type

function print<T>(data: T): void {
  console.log(data);
}
interface User {
  username: string;
  email: string;
  login(): void;
  logout(): void;
}
class Admin implements User {
  constructor(
    public username: string,
    public email: string,
    public adminLevel: number
  ) {}
  login() {
    console.log(`${this.username} who is an Admin has logged in`);
  }
  logout() {
    console.log(`${this.username} who is an Admin has logged out`);
  }
}
class Customer implements User {
  constructor(
    public username: string,
    public email: string,
    public purchaseHistory: string[]
  ) {}
  login() {
    console.log(`${this.username} has logged in`);
  }
  logout() {
    console.log(`${this.username} has logged out`);
  }
}

class Auth {
  static login(user: User) {
    user.login();
  }
  static logout(user: User) {
    user.logout();
  }
}
const admin = new Admin('admin', 'admin@abc.com', 10);
// Auth.login(admin);
const customer = new Customer('john_doe', 'johndoe@gmail.com', ['item1', 'item2']);
// Auth.login(customer);

interface Person {
  name: string;
  email: string;
  age: number;
  phone?: number; //optional property
  greet?(): void; //optional method
}
const person1: Person = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 30,
};
// console.log(person1); // Output: Alice

/* Extending Interfaces */
interface Users {
  name: string;
  email: string;
  gender: string;
  phone: number;
}
interface UserswithAddress extends Users {
  address: string;
}
const user1: UserswithAddress = {
  name: 'Bob',
  email: 'bob@example.com',
  gender: 'male',
  phone: 1234567890,
  address: 'ranchi',
};
//console.log(user1); // Output: ranchi

enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}
interface Role {
  role: Roles;
}
enum PermissionsList {
  READ = 'read',
  WRITE = 'write',
  DELETE = 'delete',
}

interface UserPermisions extends Role {
  permissions: PermissionsList[];
}

interface AdminUser extends Users, Role, UserPermisions {
  numberOfUsersReporting: number;
}
const admin1: AdminUser = {
  name: 'Charlie',
  email: 'charlie@example.com',
  gender: 'male',
  phone: 9876543210,
  role: Roles.ADMIN,
  permissions: [PermissionsList.READ, PermissionsList.WRITE, PermissionsList.DELETE],
  numberOfUsersReporting: 5,
};
// console.log(admin1);
/*  {
name: 'Charlie',
	email: 'charlie@example.com',
		gender: 'male',
			phone: 9876543210,
				role: 'admin',
					permissions: ['read', 'write', 'delete'],
						numberOfUsersReporting: 5
} */

/* Interfaces with Generics */

enum AutomobileTypes {
  CAR = 'Car',
  TRUCK = 'Truck',
  BUS = 'Bus',
  VAN = 'Van',
  MOTORCYCLE = 'Motorcycle',
}

enum AutomobileBrands {
  TESLA = 'Tesla',
  FORD = 'Ford',
  TOYOTA = 'Toyota',
  HONDA = 'Honda',
  BMW = 'BMW',
}

enum AutomobileColors {
  RED = 'Red',
  BLUE = 'Blue',
  GREEN = 'Green',
  BLACK = 'Black',
  WHITE = 'White',
  SILVER = 'Silver',
}
interface Automobile<Type, Brand, Colors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  description: string;
}

const bmw: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
  type: AutomobileTypes.CAR,
  brand: AutomobileBrands.BMW,
  colors: [AutomobileColors.BLACK, AutomobileColors.WHITE, AutomobileColors.SILVER],
  description: 'BMW is a German luxury vehicle manufacturer known for its performance and quality.',
};
// console.log(bmw);
const honda: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
  type: AutomobileTypes.MOTORCYCLE,
  brand: AutomobileBrands.HONDA,
  colors: [AutomobileColors.RED, AutomobileColors.BLUE, AutomobileColors.GREEN],
  description:
    'Honda is a Japanese multinational conglomerate known for manufacturing automobiles, motorcycles, and power equipment.',
};
// console.log(honda);

const toyota: Automobile<string, AutomobileBrands, number> = {
  type: 'car',
  brand: AutomobileBrands.TOYOTA,
  colors: [0o1, 0o2, 0o3],
  description:
    'Toyota is a Japanese multinational automotive manufacturer known for its reliable and fuel-efficient vehicles.',
};
// console.log(toyota);

/* interfaces with classes */

class Car implements Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> {
  public type: AutomobileTypes = AutomobileTypes.CAR;
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}

  carInfo() {
    return `${this.brand} is a ${this.type} available in colors: ${this.colors.join(
      ', '
    )}. Description: ${this.description}`;
  }
}
const tesla = new Car(
  AutomobileBrands.TESLA,
  [AutomobileColors.RED, AutomobileColors.BLACK],
  'Tesla, Inc. is an American electric vehicle and clean energy company founded by Elon Musk.'
);
// console.log(tesla.carInfo());

class Truck implements Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> {
  public type: AutomobileTypes = AutomobileTypes.TRUCK;
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string
  ) {}

  truckInfo() {
    return `${this.brand} is a ${this.type} available in colors: ${this.colors.join(
      ', '
    )}. Description: ${this.description}`;
  }
}
const ford = new Truck(
  AutomobileBrands.FORD,
  [AutomobileColors.BLUE, AutomobileColors.SILVER],
  'Ford Motor Company is an American multinational automaker that has its main headquarters in Dearborn, Michigan.'
);
// console.log(ford.truckInfo());
interface CommercialVehicle {
  type: AutomobileTypes;
  capacity: number;
  licenseRenewalDate: Date;
}
class Bus
  implements Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors>, CommercialVehicle
{
  public type: AutomobileTypes = AutomobileTypes.BUS;
  constructor(
    public brand: AutomobileBrands,
    public colors: AutomobileColors[],
    public description: string,
    public capacity: number,
    public licenseRenewalDate: Date
  ) {}

  busInfo() {
    return `${this.brand} is a ${this.type} with a capacity of ${this.capacity} passengers, available in colors: ${this.colors.join(
      ', '
    )}. Description: ${this.description}. License Renewal Date: ${this.licenseRenewalDate.toDateString()}`;
  }
}
const toyotaBus = new Bus(
  AutomobileBrands.TOYOTA,
  [AutomobileColors.GREEN, AutomobileColors.WHITE],
  'Toyota Bus is known for its reliability and comfort in public transportation.',
  50000,
  new Date()
);
// console.log(toyotaBus.busInfo());

/* Multiple Inheritance in Classes using Interfaces
In TypeScript, you can achieve multiple inheritance through interfaces. 
Interfaces allow you to define a contract or blueprint for classes that implement them.
*/

class Users1 {
  constructor(
    public name: string,
    public email: string
  ) {}
  getName() {
    return this.name;
  }
}
class Password {
  constructor(public password: string) {}
  getPassword() {
    return this.password;
  }
}
/* class RegisteredUser extends Users, Password { } Classes can only extend a single class. */
/* Interfaces with access Modidiers */
/* Interfaces work with public access modifier by default */
interface IRegisteredUser {
  name: string;
  email: string;
  password: string;
}
class RegisteredUser implements IRegisteredUser {
  constructor(
    public name: string, //make private to get error
    public email: string, //make private to get error
    public password: string //make private to get error
  ) {}
  getDetails() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

/*Declartion Merging */

interface IUser {
  name: string;
  email: string;
}

interface IUser {
  age: number;
  getInfo(): string;
}

//Iuser will merge since both have same name
class User2 implements IUser {
  constructor(
    public name: string,
    public email: string,
    public age: number //from merged interface
  ) {}
  getInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`;
  }
}
/* Difference between types, interfaces and abstact classes */

type UserType1 = {
  username: string;
};
type AdminType1 = { isAdmin: boolean };

//intersection of two types using types and & operator not possible using interfaces and intersections are not available with interfaces

const adminUser1: UserType1 & AdminType1 = {
  username: 'JohnDoe',
  isAdmin: true,
};
// print(adminUser1); // Output: { username: 'admin', isAdmin: true }

//union of two types using types and | operator not possible using interfaces and unions are not available with interfaces

const userOrAdmin: UserType1 | AdminType1 = {
  username: 'JaneDoe',
};
// print(userOrAdmin); // Output: { username: 'JaneDoe' }

// tuples can be used with types but not with interfaces

type UserTuple = [string, number];
const userTuple: UserTuple = ['Alice', 30];
// print(userTuple); // Output: ['Alice', 30]

//trying to redeclare types. not possible with types but possible with interfaces

/* type UserType1 = {
	username: string;
};  Error: Duplicate identifier 'UserType1' */

interface Person2 {
  firstName: string;
}
interface Person2 {
  age: number;
} //no error
interface Person3 extends Person2 {
  lastName: string;
}
interface Person4 {
  email: string;
}
const person2: Person2 = {
  firstName: 'Bob',
  age: 25, //comment to see Property 'age' is missing in type '{ firstName: string; }' but required in type 'Person2'as they got merged
};
// print(person2); // Output: { name: 'Bob', age: 25 }

const person3: Person3 = {
  firstName: 'Charlie',
  lastName: 'Brown',
  age: 28,
};
// print(person3); //Output: { firstName: 'Charlie', lastName: 'Brown', age: 28 }
//types can't be merged, types cant be extended

//custom types cpuld not be implemented using classes but interfaces can be implemented using classes
class Person5 implements Person3, Person4 {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string
  ) {}
  getInfo() {
    return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, Email: ${this.email}`;
  }
}
const person5 = new Person5('David', 'Smith', 35, 'david@example.com');
// print(person5.getInfo()); // Output: Name: David Smith, Age: 35, Email: david@example.com

/* The key distinction is that abstract classes can have method implementations, which can be inherited by subclasses, while interfaces can only define method signatures without any implementation. */
abstract class PersonAbstract {
  public abstract firstName: string;
  public abstract lastName: string;
  public getFullName(): string {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class RegisterPersonAbstract extends PersonAbstract {
  constructor(
    public firstName: string,
    public lastName: string
  ) {
    super();
  }
  public static nameClass() {
    print('This is a static method in abstract class');
  }
}

// const registerPerson = new RegisterPersonAbstract('Eve', 'Johnson');
// calling static method without creating instance RegisterPersonAbstract.nameClass();
// print(registerPerson.getFullName()); // Output: Hello Eve Johnson
interface UserAbstract {
  firstName: string;
  lastName: string;
  getFullName: () => void;
}
class RegisterUserAbstract implements UserAbstract {
  constructor(
    public firstName: string,
    public lastName: string
  ) {}
  getFullName() {
    //comment out the line below it can't be forced only definition can be forced
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}
const registerUser = new RegisterUserAbstract('Frank', 'Williams');
// print(registerUser.getFullName()); // Output: Hello Frank Williams

/*  classes can implement multiple interfaces but can extend only one abstract class.
abstract classes can have static methods and properties but interfaces cannot have static methods and properties.
 interfaces are more flexible and can be used to define the shape of objects, functions, and classes, while abstract classes are primarily used for creating base classes with shared functionality. */

/* if any static methods are required use abstract class else only for contracts use interfaces */
