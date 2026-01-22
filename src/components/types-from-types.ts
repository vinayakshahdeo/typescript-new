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
/* type of */
