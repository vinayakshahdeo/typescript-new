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
