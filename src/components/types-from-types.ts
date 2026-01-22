function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function print<T extends unknown[]>(...params: T): T {
// 	return params;
// }

interface Box<Type> {
  content: Type;
  size: number;
}

const stringBox: Box<string> = {
  content: 'Hello, TypeScript!',
  size: 10,
};

const numberBox: Box<number> = {
  content: 42,
  size: 5,
};

interface LengthWise {
  length: number;
}

// function lengthOfContent<T>(item: T): void {
// 	print(item.length);Property 'length' does not exist on type 'T'.
// }

function lengthOfContent<T extends LengthWise>(item: T): void {
  print(item.length);
}
lengthOfContent(stringBox.content);
// lengthOfContent(numberBox.content);Argument of type 'number' is not assignable to parameter of type 'LengthWise'.

/* Key of type */
/* TypeScript provides a way to access the keys of an object using the keyof operator. This allows you to work with the properties of an object as if they were variables, without knowing their specific types at compile time. */

type User = {
  id: number;
  name: string;
  age: number;
};
type UserKeys = Required<keyof User>; //'id' | 'name' | 'age'

const keys: UserKeys[] = ['id', 'name', 'age'];

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user: User = { id: 1, name: 'John', age: 30 };
print('id', getProperty(user, 'id'));
for (const key of keys) {
  print(getProperty(user, key));
}
// for (const key in keys) {
// 	print(getProperty(user, keys[key] as string & keyof User));
// }

/* type of */
/* type of operator is used to get the type of a variable or expression */

type UserType = typeof user;

function getUser(): UserType {
  return { id: 2, name: 'Jane', age: 25 };
}

type ReturnUserType = ReturnType<typeof getUser>;

const anotherUser: ReturnUserType = getUser();
print(anotherUser);

/* Indexed access types */
/* Used for accessing the properties of an object */

type UserNameType = User['name']; // string
type UserIdType = User['id']; // number

const names: UserNameType = getProperty(user, 'name');
print(names);

/* Mapped Types */
/* Mapped types are used to create new types based on existing types by transforming each property in the original type */

type PartialUser = {
  [P in keyof User]?: User[P];
};

const partialUser: PartialUser = { name: 'Partial John' };
print(partialUser);

type ReadonlyUser = {
  readonly [P in keyof User]: User[P];
};

const readonlyUser: ReadonlyUser = { id: 3, name: 'Readonly Jane', age: 28 };
// readonlyUser.name = 'New Name';Cannot assign to 'name' because it is a read-only property.
print(readonlyUser);
