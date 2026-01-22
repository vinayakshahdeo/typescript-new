function print<T extends unknown[]>(...params: T): void {
  console.log(...params);
}

// function print<T extends unknown[]>(...params: T): T {
// 	return params;
// }

/* Type Guards */

/* Type guards are used to narrow down the type of a variable within a conditional block */

function printStrings(string: string | string[] | null): void {
  if (typeof string === 'string') {
    print('Single string:', string);
  } else if (Array.isArray(string)) {
    print('Array of strings:', string.join(', '));
  } else {
    print('No string provided');
  }
}

printStrings('Hello, Type Guards!');
printStrings(['Hello', 'Type', 'Guards']);
printStrings(null);
