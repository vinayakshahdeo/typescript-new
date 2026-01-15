/* Interface */
// interfaces are binding contracts between two components
// they define the structure of an object
// they are used to define the shape of an object
// they are used to define the shape of a function
// they are used to define the shape of a class

//interfaces are similar to type aliases but they can be extended and implemented
// interfaces can only be used to define the shape of an object or a function
// type aliases can be used to define the shape of any type
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
