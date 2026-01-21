/* Utility Types */
/* Pre Defined generic types and help and create or modify new types from existing types */
function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}
