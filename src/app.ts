function methodLogger(originalMethod: any, context: any) {
  console.log(originalMethod);
  console.log(context);
}

function classDecorator(originalClass: any) {
  console.log(originalClass);
}

@classDecorator
class Person {
  constructor(public name: string) {}

  @methodLogger
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}
