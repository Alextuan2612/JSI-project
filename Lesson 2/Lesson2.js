//Learning
const target={
    name: "Hung",
    age: "18"
}

const source = {
    name:"Huy",
    gender:"male"
}
console.log(Object.assign(target,source));
//Spread
let a = [1,2]
let b = [,...a]
let c =[3,4]
console.log([...c,...a])

let string='hello'
let arr_str=[...string];
console.log(arr_str)
console.log(b)

//Map
const arr =[1,2,3,4]
const newArr = arr.map(num => {
    return num * 2
    })
console.log(newArr)
//filter
const result = arr.filter(num => 
    {return num%2==0}
    );
console.log(result)



//Lesson's work
//Question 1:
let arr1=[1,2,3,4,5]
let dup=[,...arr1]
const dup1 = arr1.map(x=>x)
let dup2=[].concat(arr1)
console.log(dup1)
//Question 2:
let arrA = ['Hello', ' Xin chào'] 
let arrB = ['Bonjour', 'Olá']
let waysToSayHello = [...arrA,...arrB]
console.log(arrA.concat(arrB))
//Question 3:
let arrX = [0,1,2,3,4,5,6,7,8]
let arrSquare = arrX.map(num => num*num)
let arrOdds = arrX.filter(num=> num%2)
console.log(arrSquare)
console.log(arrOdds)
//Question 4:
let input = [1,2,3,4,5,6,7]
function filterRange1(arr, a, b){
    let c = arr.slice(a, b);
    console.log(c)
}
filterRange1(input,1,3)
//Question 5:
let input1 = [1,2,3,4,5,6,7]
function filterRange(arr, a, b){
    c = arr.slice(a+1, b);
    console.log(c)
}
filterRange(input1,1,3)
let input2 = [1,2,3,4,5,6,7]
function filterRange2(arr, a, b){
    c = arr.slice(a+1, b);
    arr = c
}
filterRange2(input2,1,3)
console.log(input2)
//Question 6:
let student = [
    {
        name: "Duong",
        age: 11,
        hobbies: ["video game","sleep","learn"]
    },
    {
        name: "Dong",
        age: 12,
        hobbies: ["video game","sick","study"]
    },
    {
        name: "Minh",
        age: 13,
        hobbies: ["video game","sick","learn"]
    },
    {
        name: "Thanh",
        age: 9,
        hobbies: ["play game","sleep","learn"]
    },
    {
        name: "Hung",
        age: 11,
        hobbies: ["play game","sick","study"]
    }
]

