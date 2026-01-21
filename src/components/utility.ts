/* Utility Types */
/* Pre Defined generic types and help and create or modify new types from existing types */
function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

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
print(user1);
