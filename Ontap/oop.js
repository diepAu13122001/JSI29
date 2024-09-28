class Animal {
  $count; // class attribute
  constructor(name = "test", birthDate = "1/1/2022", age = 0) {
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak() {
    console.log("Animal is speaking!");
  }

  getName() {
    return this.name;
  }
}

// sub class => ke thua tu Animal
class Cat extends Animal {
  constructor(name, birthDate, age) {
    super(name, birthDate, age);
  }

  speak() {
    console.log("Mew mewwwwwwwwwwww");
  }
}

const myPet = new Cat("Mimi");
myPet.speak();
console.log(myPet.getName());

// document.getElementById("").addEventListener("click", functionName)
