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
Auth.login(admin);
const customer = new Customer('john_doe', 'johndoe@gmail.com', ['item1', 'item2']);
Auth.login(customer);
