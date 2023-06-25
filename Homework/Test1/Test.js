//Question 1:
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]

function arrayRemove(arr, value) {
    return arr.filter(function (x) {
        return x > value;
    });
}

var result = arrayRemove(m, 0);
console.log(result)


const mSquared = result.map(num => {
    return Math.pow(num, 2)
})
console.log(mSquared)
//Correct solution:
// var x
// function removeNumber(){
// for(i = 0; i < m.length; i++){
//     if(typeof(m[i])== "number"){
//         x = stringsArray.splice(i, 1);
//         return x;
        
//     }
// }}
// console.log(m)

//Question 2:
let string = 'High knowledge, high return'
let arr_str = [...string];
const a = arr_str.filter(num => { return num != " " }
);
console.log(a)
const b = a.map(word => word.toLowerCase());
console.log(b)



//Question 3:
class Shape {
    constructor(Area, Perimeter) {
        this.Area = Area;
        this.Perimeter = Perimeter;
    }
}
class Triangle extends Shape {
    constructor(Area, Perimeter, side1, side2, side3) {
        super(Area, Perimeter);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    GetShapeType() {
        console.log('This is a Triangle')
    }

    GetPerimeter() {
        console.log('The perimeter of the triangle is', this.side1 + this.side2 + this.side3)
    }
    GetArea() {
        let s = (this.side1 + this.side2 + this.side3) / 2
        console.log('The Area of the triangle is', Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3)))
    }
}
class Rectangle extends Shape {
    constructor(Area, Perimeter, length, width) {
        super(Area, Perimeter);
        this.length = length;
        this.width = width;
    }

    GetShapeType() {
        console.log('This is a Rectangle')
    }

    GetPerimeter() {
        console.log('The perimeter of the rectangle is', 2 * (this.length + this.width))
    }
    GetArea() {
        console.log('The Area of the rectangle is', this.length * this.width)
    }
}
class Square extends Shape {
    constructor(Area, Perimeter, side) {
        super(Area, Perimeter);
        this.side = side;
    }

    GetShapeType() {
        console.log('This is a Square')
    }

    GetPerimeter() {
        console.log('The perimeter of the square is', 4 * this.side)
    }
    GetArea() {
        console.log('The Area of the square is', Math.pow(this.side, 2))
    }
}
class Circle extends Shape {
    constructor(Area, Perimeter, radius) {
        super(Area, Perimeter);
        this.radius = radius;
    }

    GetShapeType() {
        console.log('This is a Circle')
    }

    GetPerimeter() {
        console.log('The perimeter of the circle is', 2 * Math.PI * this.radius)
    }
    GetArea() {
        console.log('The Area of the cirlce is', Math.PI * Math.pow(this.radius, 2))
    }
}

let A = new Triangle(0, 0, 4, 5, 6)
A.GetArea();
let B = new Rectangle(0, 0, 5, 6)
B.GetArea()
let C = new Square(0, 0, 4)
C.GetArea()
let D = new Circle(0, 0, 4)
D.GetArea()
