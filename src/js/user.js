// export const User = {
//   createUser: (userId, userName) => {
//     return { userId, userName, status: 'active' };
//   },
//   updateUser: (userId, user) => {
//     return { ...user, userId };
//   },
// };

export class User {
  constructor(greeting) {
    this.greeting = greeting;
  }

  createUser(userName) {
    this.user = {
      userName,
      greeting: this.greeting,
    };
    return this.user;
  }

  showGreeting() {
    console.log(`${this.greeting}, ${this.user.userName}`);
  }
}

export class AdminUser extends User {
  constructor() {
    super('Greeting to Admin');
  }
  showGreeting() {
    console.log(`${this.greeting}, ${this.user.userName} from admin`);
  }
}
