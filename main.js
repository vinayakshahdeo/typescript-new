/* this keyword always refers to current object */
/* this keywordis executed function it would poin to windows orglobal object */

function print(...args) {
  console.log(...args); //refers to global object window in browsers
}

const book = {
  title: 'JavaScript Basics',
  read() {
    print(this);
  },
  authors: ['John Doe', 'Jane Smith'],
  printAuthors() {
    this.authors.forEach(function (author) {
      print(this.title, ' - ', author); //refers to undefined object when this is not passed as Arg to forEach function
    }, this); //passing this as Arg to forEach
  },
  printAuthorsArrow() {
    this.authors.forEach((author) => {
      print(this.title, ' - ', author); //refers to book object as arrow function doesnt have its own thisitsmaking use of closure of parent scope
    });
  },
};
// book.printAuthors(); //refers to author values inside forEach
// book.printAuthorsArrow(); //refers to author values inside forEach

/* Constructor Functions */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }
  login() {
    print(this.name, ' has logged in');
  }
  logout() {
    print(this.name, ' has logged out');
  }
  addPoints() {
    this.point++;
    print(this.name, ' has ', this.point, ' points');
  }
}

const john = new User('John Doe', 'john@example.com');
const jane = new User('Jane Smith', 'jane@example.com');
//print(john); //all class properties and methods are in prototype of john object
// print(jane); //all class properties and methods are in prototype of jane object
//decalring a class using function constructor

function Person(names, email) {
  this.names = names;
  this.email = email;
  this.points = 0;
  //   this.login = () => {
  //     console.log(this.names, ' has logged in');
  //   };
  //   this.logout = () => {
  //     console.log(this.names, ' has logged out');
  //   };
  //   this.addPoints = () => {
  //     this.point++;
  //     console.log(this.names, ' has ', this.point, ' points');
  //   };
}
// const alice = new Person('Alice', 'alice@example.com');
// print(alice); //only constructor properties are in alice object prototype no methods in prototype
/* Prototype Inheritance in JavaScript */
/* Prototypes */

Person.prototype.login = function () {
  print(this.names, ' has logged in - added using prototype');
};
Person.prototype.logout = function () {
  print(this.names, ' has logged out - added using prototype');
};
Person.prototype.addPoints = function () {
  this.points++;
  print(this.names, ' has ', this.points, ' points - added using prototype');
};

const alice = new Person('Alice', 'alice@example.com');
print(alice); //all properties are in alice object prototype
alice.login(); //didnt need to call from prototype
alice.addPoints(); //it already exists in prototype
print(alice);

function AdminPerson(names, email, peopleReporting) {
  Person.apply(this, [names, email]); //invoking Person constructor function to initialize properties
  this.peopleReporting = peopleReporting || 0;
}
// const superAdmin = new AdminPerson('Super Admin', 'superadmin@example.com', 20);
// print(superAdmin);
// superAdmin.login(); //will throw error as login method is not in prototype chain of superAdmin
/* Linking Prototypes */
AdminPerson.prototype = Object.create(Person.prototype); //linking prototype of Person to AdminPerson
// print(superAdmin);

AdminPerson.prototype.updateUserReporting = function (num) {
  this.peopleReporting += num;
  print(this.names, ' now reports to ', this.peopleReporting, ' people');
};
const superAdmin = new AdminPerson('Super Admin', 'superadmin@example.com', 20);
superAdmin.login(); //now works as prototype chain is linked
superAdmin.updateUserReporting(5);
print(superAdmin);
