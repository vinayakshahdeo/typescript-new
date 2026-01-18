/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*any*/

namespace ServerDemo {
  let name: any = 'vinayak';
  name = 123;
  name = [];
  // console.log(name);

  /*unknown*/

  // function returnParam(param) {//Parameter 'param' implicitly has an 'any' type.
  // 	return param;
  // }

  function multiplyByTwo(number: unknown) {
    if (typeof number === 'number') {
      return number * 2;
    }
    return 'Please provide a valid number';
  }

  // console.log(multiplyByTwo(8));
  // console.log(multiplyByTwo('hello'));

  /*type aliases*/
  //referred in later code
  type CustomString = string;
  type CustomNumber = number;
  type CustomDate = Date;
  type CustomSymbol = symbol;

  let firstName: CustomString = 'vinayak'; //type alias used as typescript converted it to string
  // console.log(firstName);

  let age: CustomNumber = 39; //type alias used as typescript converted it to number
  // console.log(age);

  let today: CustomDate = new Date(); //type alias used as typescript converted it to Date
  // console.log(today);

  let sym: CustomSymbol = Symbol('my symbol'); //type alias used as typescript converted it to symbol
  // console.log(sym);

  /*duck typing*/
  //above code is a declaration of type aliases in TypeScript, which allows you to create custom names for existing types. This can enhance code readability and maintainability by providing more meaningful names for types used in your code.

  //duck typing is a concept in TypeScript (and other programming languages) where the type or class of an object is determined by the methods and properties it has, rather than its actual type or class. In other words, "if it looks like a duck and quacks like a duck, it's a duck."
  function addNumbers(n1: number, n2: number) {
    return n1 + n2;
  }
  //inferered as (n1: number, n2: number) => number hence duck typing since finalResult is a number
  let finalResult = addNumbers(10, 20);
  // console.log(finalResult);

  /*union types*/
  let mixedType: number | string;
  mixedType = 20;
  // console.log(mixedType);
  mixedType = 'vinayak';
  // console.log(mixedType);
  // mixedType = false;//error TS2322: Type 'boolean' is not assignable to type 'string | number'.
  function print(input?: string | undefined) {
    if (input) console.log(input);
    // console.log('Please give input to print');
  }
  print();
  // print('Hello TypeScript');

  /*Conditional types*/
  type TrueString = CustomString extends string ? true : false;
  type ConditionalNumber = CustomNumber extends Date ? number : string;
  type DateAssignment = CustomDate extends Date ? Date : undefined;
  let myStringVariable: TrueString = true; //type is true
  let myConditionalVariable: ConditionalNumber = 'This is string'; //type is string
  let myDateValue: DateAssignment = new Date(); //type is Date
  console.log(myStringVariable, myConditionalVariable, myDateValue);
  /*type assertions*/
  let someValue: unknown = 'this is a string';
  let strLength: number = (someValue as string).length;
  console.log(strLength);

  /*type Hierarchies*/
  type check = any extends unknown ? true : false; //true
  type check2 = null extends any ? true : false; //true
  type check3 = void extends any ? true : false; //true
  type check4 = undefined extends void ? true : false; //true
  type check5 = never extends any ? true : false; //false
  type check6 = boolean extends any ? true : false; //true
  type check7 = string extends any ? true : false; //true
  type check8 = number extends any ? true : false; //true
  type check9 = symbol extends any ? true : false; //true
  type check10 = object extends any ? true : false; //true

  const throwError = (message: string) => {
    throw new Error(message);
  };
  // console.log(throwError('This is an error message'));

  let strings: Object = ['one', 'two', 'three']; //bypasses type checking as arrays is a subtype of Object

  let myFunct: Object = () => 2 + 3; //bypasses type checking as arrow function is a subtype of Object);

  /*number enum*/
  enum Direction {
    Up,
    Down,
    Left,
    Right,
  }
  let move: Direction = Direction.Up;
  // console.log(move); //0
  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400,
  }
  let responseStatus: StatusCodes = StatusCodes.Success;
  // console.log(responseStatus); //200

  /*string enum*/
  enum Fruits {
    Apple = 'APPLE',
    Banana = 'BANANA',
    Orange = 'ORANGE',
  }
  let myFruit: Fruits = Fruits.Banana;
  // console.log(myFruit); //BANANA

  /*heterogeneous enum*/
  enum MixedEnum {
    No = 0,
    Yes = 'YES',
  }
  let answer: MixedEnum = MixedEnum.Yes;
  // console.log(answer); //YES

  /*enum with computed and constant members*/
  enum ComputedEnum {
    First,
    Second = First * 2,
    Third = Second + 3,
  }
  let computedValue: ComputedEnum = ComputedEnum.Third;
  // console.log(computedValue); //5

  /*const enum*/
  const enum Colors {
    Red,
    Green,
    Blue,
  }
  let favoriteColor: Colors = Colors.Green;
  // console.log(favoriteColor); //1

  /*ambient enum*/
  enum AmbientEnum {
    Alpha,
    Beta,
    Gamma,
  }
  let ambientValue: AmbientEnum = AmbientEnum.Beta;
  // console.log({ ambientValue }); //1

  /*type casting*/
  let fName = <any>'vinayak'; //type is any string got typecasted as any
  let lName = 'shahdeo' as any; //type is any string got typecasted as any
  //assume coming from api
  let user = { name: 'vinayak', email: 'vinayak.shahdeo.9@gmail.com' };
  type User = {
    name: string;
    email: string;
  };
  function fetchUser() {
    return user as User;
  } //type is User and is no longer a generic object

  const fetchedUser: User = fetchUser();

  let oldAge = 39 as const;
  type CustomAge = typeof oldAge extends number ? 39 : Number;
  oldAge += 200;
  let newAge = oldAge + 1; //newAge is of type number not 40 as oldAge is typecasted as const
  // console.log(newAge);
  // let testAge: CustomAge = 40;//error TS2322: Type '40' is not assignable to type '39'.
}
