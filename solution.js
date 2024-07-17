                        // Please comment out each solution to see the results in git bash

// Solution 1

/*const person = {
  name: 'Alice',
  age: 30,
  Phone: '019********'
};

const { name, age } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 30
*/


// Solution 2

/*
const CircleArea = (radius) => {
  return Math.PI * radius * radius;
};

export { CircleArea };
*/


// Solution 3

/*

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

export default Rectangle;
*/


// Solution 4

/*class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person('John', 'Doe');

console.log(person.fullName); // Output: John Doe

person.fullName = 'Jane Smith';
console.log(person.fullName); // Output: Jane Smith
*/


// Solution 5

/*const Circle = class {
  constructor(radius) {
    this.radius = radius;
  }

  calculateCircumference() {
    return 2 * Math.PI * this.radius;
  }
};

const circle = new Circle(5);
console.log(circle.calculateCircumference());
*/


// Solution 6

/*
let propName = 'age';
let propValue = 30;

const obj = {
  [propName]: propValue,
  ['computed_' + propName]: 'Computed ' + propValue,
  [`dynamic_${propName}_value`]: propValue * 2
};

console.log(obj);
*/


// Solution 7

/*
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent constructor with super()
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

const myDog = new Dog('Buddy', 'Labrador');
myDog.speak(); 
myDog.bark();  
*/


// Solution 8

/*class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error('Cannot instantiate abstract class Shape.');
    }
    
  }

  
  area() {
    throw new Error('Method area() must be implemented.');
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

// const shape = new Shape(); 

// Creating instances of Circle is allowed
const circle = new Circle(5);
console.log('Circle Area:', circle.area());
*/


// Solution 9

/*class MathUtil {
  static square(number) {
    return number * number;
  }
}

const number = 5;
const squared = MathUtil.square(number);
console.log(`The square of ${number} is: ${squared}`);
*/


// Solution 10

/*
const symKey = Symbol('mySymbol');

const obj = {
  [symKey]: 'Value for mySymbol'
};

console.log(obj[symKey]);
*/

  