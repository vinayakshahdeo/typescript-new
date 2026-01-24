// function print<T extends unknown[]>(...params: T): void {
// 	console.log(...params);
// }

function print<T extends unknown[]>(...params: T): T {
  return params;
}

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

/* Truthiness Narrowing */
type Person = {
  name: string;
  age?: number;
};

function printAge(person: Person): void {
  if (person.age) {
    //typescript infers that age is number here
    print(`${person.name} is ${person.age} years old.`);
  } else {
    print(`${person.name}'s age is unknown.`);
  }
}

const person1: Person = { name: 'Alice', age: 30 };
const person2: Person = { name: 'Bob' };

printAge(person1);
printAge(person2);

/* Equality Narrowing  */

type Circle = {
  kind: 'circle';
  radius: number;
};

type Square = {
  kind: 'square';
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength ** 2;
  }
}

const myCircle: Circle = { kind: 'circle', radius: 5 };
const mySquare: Square = { kind: 'square', sideLength: 4 };

print('Area of circle:', getArea(myCircle));
print('Area of square:', getArea(mySquare));

/* In Operator Narrowing */
function getAreas(shape: Shape): number {
  if ('radius' in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.sideLength ** 2;
  }
}
print('Area of circle using in operator:', getAreas(myCircle));
print('Area of square using in operator:', getAreas(mySquare));

/* Instance Of TypeGuards */

abstract class Product {
  constructor(
    public price: number,
    public name: string
  ) {}
  abstract getPrice(): number;
}

class Electronics extends Product {
  constructor(
    price: number,
    name: string,
    public warranty: number
  ) {
    super(price, name);
  }
  getPrice(): number {
    return this.price;
  }
  getWarranty(): number {
    return this.warranty;
  }
  getName(): string {
    return this.name;
  }
}
class Clothing extends Product {
  constructor(
    price: number,
    name: string,
    public size: string,
    public material: string
  ) {
    super(price, name);
  }
  getPrice(): number {
    return this.price;
  }
  getSize(): string {
    return this.size;
  }
  getMaterial(): string {
    return this.material;
  }
}

function printProductDetails(product: Product): void {
  print(`Product Name: ${product.name}`);
  print(`Product Price: $${product.getPrice()}`);

  if (product instanceof Electronics) {
    print(`Warranty: ${product.getWarranty()} years`);
  } else if (product instanceof Clothing) {
    print(`Size: ${product.getSize()}`);
    print(`Material: ${product.getMaterial()}`);
  }
}

const laptop = new Electronics(1200, 'Laptop', 2);
const tshirt = new Clothing(20, 'T-Shirt', 'M', 'Cotton');

printProductDetails(laptop);
printProductDetails(tshirt);
