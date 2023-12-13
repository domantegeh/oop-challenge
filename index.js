class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  eat() {
    console.log(`${this.name} is eating!`);
  }
}

class Eagle extends Animal {
  fly() {
    console.log(`${this.name} is flying!`);
  }
}

const myRabbit = new Rabbit("Labi", 2, true);
const myEagle = new Eagle("Elo", 4, false);
myRabbit.eat();
myEagle.fly();
