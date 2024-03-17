class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`My name is ${this.name} and my age is ${this.age}.`);
  }
}

class Profession extends Person {
  profession: string;

  constructor(name: string, age: number, profession: string) {
    super(name, age);
    this.profession = profession;
  }
  speak() {
    console.log(`My name is ${this.name} and I am a ${this.profession}.`);
  }
}

const personName = new Person("Mubeen Ul Hassan", 19);
const personProfession = new Profession(
  "Mubeen Ul Hassan",
  19,
  "GenAI Engineer"
);

personName.speak();
personProfession.speak();
