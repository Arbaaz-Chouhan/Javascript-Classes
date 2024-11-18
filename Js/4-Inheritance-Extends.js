class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    about() {
        console.log("My name is", this.name, "and my age", this.age);
    }
}

class Programmer extends Person {
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age
    }
}

let Person1 = new Person("Arbaaz Chouhan", 18);
let Programmer1 = new Programmer("Adnan Chouhan", 22);

console.log(Person1);
console.log(Programmer1);