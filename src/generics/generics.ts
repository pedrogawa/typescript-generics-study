interface FooBar {
  foo: string;
  bar: string;
}

const fooBars: Array<FooBar> = [
  {
    foo: "foo1",
    bar: "bar1",
  },
  {
    foo: "foo2",
    bar: "bar2",
  },
  {
    foo: "foo3",
    bar: "bar3",
  },
  {
    foo: "foo4",
    bar: "bar4",
  },
];

function sortByKey<T>(data: Array<T>, key: keyof T) {
  data.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }

    if (a[key] < b[key]) {
      return -1;
    }

    return 0;
  });
}

sortByKey<FooBar>(fooBars, "foo");

class Animal {
  public legCount: number;
  constructor(legCount: number) {
    this.legCount = legCount;
  }
}

class Cat extends Animal {
  constructor() {
    super(4);
  }
}

class Kangaroo extends Animal {
  constructor() {
    super(2);
  }
}

function printLegCount<T extends Animal>(animal: T) {
  console.log(`My leg count is: ${animal.legCount}`);
}

const myCat = new Cat();
const myKangaroo = new Kangaroo();

printLegCount(myCat);
printLegCount(myKangaroo);
