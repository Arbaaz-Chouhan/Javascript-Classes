class parentfunction {
    constructor(width) {
        this.width = width;
        this.height = width;
    }

    static equals(a, b) {
        return a.width * a.height === b.height * b.height;
    }

    static checkValue(first, secound) {
        return first === secound;
    }

}


let result1 = new parentfunction(10);
let result2 = new parentfunction(11);

console.log(parentfunction.equals(result1, result2)); // false

console.log(parentfunction.checkValue(10, 10)); // false
