/* Utility Types */
/* Pre Defined generic types and help and create or modify new types from existing types */
function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function print<T extends unknown[]>(...params: T): T {
// 	return params;
// }

/* Partial Types */

/* this add optional condition in all the fields of type */

type Partials<T> = {
  [P in keyof T]?: T[P];
};

type Excludes<T, U> = T extends U ? never : T;
// Now if T has any type which is assignable to U then it will be excluded from T
interface User {
  name: string;
  age: number;
}
const user1: Partials<User> = { name: 'Vinayak' };
// print(user1);

/* Awaited Types */

/* Awaited types are used in async functions to get the type of the resolved value from a promise */
async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data: Awaited<ReturnType<typeof response.json>> = await response.json();
  return data;
}

fetchUser().then((user) => user);

const promisedFunc: Promise<string> = new Promise((resolve, _reject) => {
  setTimeout(() => {
    resolve('Hello, World!');
  }, 1000);
});
type AwaitedType = Awaited<typeof promisedFunc>;
promisedFunc.then((message: AwaitedType) => {
  print(message);
});

/* Record Types */

/* Record types are used to create an object type with a specific key-value pair structure */
type Roles = 'admin' | 'user' | 'guest';
type Permissionss = 'read' | 'write' | 'delete';
type RolePermissions = Record<Roles, Permissionss[]>;

const rolePermissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read'],
};

print(rolePermissions);
// Record<Keys, Type>

type Roless = 'author' | 'editor' | 'researcher';

interface User {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  contributors: Record<Roless, User>;
}

const article: Article = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  content: 'Duis est urna, eleifend at malesuada id, suscipit eu',
  // Contributors can be type generated from Roles type and User interface
  contributors: {
    author: { name: 'John', email: 'john@email.com', age: 32 },
    editor: { name: 'Frank', email: 'frank@email.com', age: 36 },
    researcher: { name: 'Mark', email: 'mark@email.com', age: 36 },
  },
};
print(article);

/* Pick types */
/* Pick<Type, Keys> */
/* pick the properties from type that are specified in keys */

interface PersonDetails {
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
}
type NameAndAge = Readonly<Pick<PersonDetails, 'name' | 'age'>>;

const person1: NameAndAge = {
  name: 'Alice',
  age: 30,
};
// person1.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property
print(person1);

/*  Omit Types  */
/* Omit<Type, Keys> */
/* Omit the properties from type that are specified in keys */

type ContactDetails = Omit<PersonDetails, 'address' | 'phone'>;

const contact1: ContactDetails = {
  name: 'Bob',
  age: 25,
  email: 'bob@example.com',
};
print(contact1);

/* Partial Types */
/* Partial<Type> */
/* Make all properties in type optional */

type PartialPersonDetails = Partial<PersonDetails>;

const person2: PartialPersonDetails = {
  name: 'Charlie',
};
print(person2);

/* Required Types */
/* Required<Type> */
/* Make all properties in type required */

type RequiredPersonDetails = Required<PartialPersonDetails>;

const person3: RequiredPersonDetails = {
  name: 'David',
  age: 40,
  address: '123 Main St',
  phone: '555-1234',
  email: 'david@example.com',
};
print(person3);

/* Readonly Types */
/* Readonly<Type> */
/* Make all properties in type readonly */

const person4: Readonly<PersonDetails> = {
  name: 'Eve',
  age: 28,
  address: '456 Elm St',
  phone: '555-5678',
  email: 'eve@example.com',
};
// person4.name = 'Eva'; // Error: Cannot assign to 'name' because it is a read-only property
console.log(person4);
