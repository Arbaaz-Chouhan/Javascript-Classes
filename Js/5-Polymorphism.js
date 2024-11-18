class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("Generic Animal Sound");
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        super.makeSound()
        console.log("Generic Dog Sound");
    }
}

let a1 = new Animal("elephant");
let a2 = new Dog("cat");

// console.log(a1);
console.log(a2.makeSound());



