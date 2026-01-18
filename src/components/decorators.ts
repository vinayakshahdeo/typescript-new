/* A decorator in typecript is a special kind of declaration that can modify classes,methods, properties or parameters, enhancing their behaviour or metadata at design time. */

// Helper function to print
function print(...args: any[]) {
  console.log(...args);
}

function methodLogger(originalMethod: any, _context: any) {
  print('Decorator Invoked');
  //! The replacement function replaces the original method and when the original method is invoken then the replacement method is invoked instead of the original greet method.
  function replacementMethod(this: any, ...args: any[]) {
    print(args);
    print(this);
    print('Invocation Started');
    // The call() method of Function instances calls this function with a given this value and arguments provided individually.
    const result = originalMethod.call(this, ...args);
    print('Invocation ended');
    return result;
  }
  return replacementMethod;
}

class Person2 {
  constructor(public name: string) {}

  /* @methodLogger */
  greet(greeting: string) {
    print(` ${greeting}, ${this.name}`);
  }
}

const useUser: Person2 = new Person2('John');
useUser.greet('Hello');
