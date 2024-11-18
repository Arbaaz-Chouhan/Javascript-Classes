class Rectangle {
    constructor(width, heigth, color) {
        console.log("hello everyOne");
        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    square() {
        return this.width * this.heigth;
    }
}

let result1 = new Rectangle(10, 2, "red");
let result2 = new Rectangle(10, 5, "blue");

console.log(result1);
console.log(result1.square());
console.log(result2);
console.log(result2.square());
