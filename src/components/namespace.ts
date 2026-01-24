namespace CommonUtils {
  export function print<T extends unknown[]>(...params: T): void {
    console.log(...params);
  }

  // function prints<T extends unknown[]>(...params: T): T {
  // 	return params;
  // }
}

/* A namespace is a way to organize related modules or groups of functions, interfaces, and classes into logical namespaces that prevent name collisions with other parts of your application. */

// namespace MathUtils {
//   export function add(a: number, b: number): number {
//     return a + b;
//   }

//   export function subtract(a: number, b: number): number {
//     return a - b;
//   }
// }

// namespace StringUtils {
//   export function add(a: string, b: string): string {
//     return a + b;
//   }

//   export function subtract(a: string, b: string): string {
//     return a.replace(b, '');
//   }
// }
//make changes to tsconfig such that you have outfile set which doesnt work with other options for some reason

// const sum = MathUtils.add(10, 20);
// const combined = StringUtils.add('Hello', ' world!');
// CommonUtils.print(sum, combined);

//typescript namespaces are used with decalaration files

/* making namespace in js and the file will be in js*/

class PrintUtils {
  static print<T extends unknown[]>(...params: T): void {
    console.log(...params);
  }

  // function prints<T extends unknown[]>(...params: T): T {
  // 	return params;
  // }
}

// no need to use typescript reference and use import for importing files
class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}

class StringUtils {
  static add(a: string, b: string): string {
    return a + b;
  }

  static subtract(a: string, b: string): string {
    return a.replace(b, '');
  }
}

const sum = MathUtils.add(10, 20);
const combined = StringUtils.add('Hello', ' world!');

PrintUtils.print(sum, combined, 'from printutils');

interface AddOutput {
  sum: number;
  class: string;
}
class MathUtils2 {
  static add(a: number, b: number): AddOutput {
    return { sum: a + b, class: 'MathUtils' };
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }
}
MathUtils2.add(3, 6);
