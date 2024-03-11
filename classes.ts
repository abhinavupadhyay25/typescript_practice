class Point {
  x = 10;
  y = 20;
}

const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

class Person1 {
  name: string;

  public constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person1("Jane");

//console.log(Person);

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName());
