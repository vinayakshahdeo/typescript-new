function prints<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function prints<T extends unknown[]>(...params: T): T {
// 	return params;
// }
