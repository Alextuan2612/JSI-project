let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
// let find=false
// let person = prompt("Do tuoi can tim?");
// if (person!=null){
// for(let i=0;i<student.length;i++){
//     if(student[i].age==person){
//         console.log(student[i].name)
//         find=true
//     }
// }
// }
// if (find==false){
//     console.log("notfound")
// }


// let course1=prompt ("Khoa hoc can tim");
// let find1=false;

// for (let sdt of student) 

//     for(let c of sdt.course){
//     if(c== course1){
//     console.log(sdt.name);
//     find1 = true;}}


// if (find1 == false) {
//     console.log("not found");
// }

let course=prompt("nhap khoa hoc")
let find_course = false;

for(let std of student){
    if (std.course.indexOf(course)>=0){
        console.log(std.name)
        find_course=true;
    }
}
if (find_course == false) {
    console.log("notfound")
}

let arr1=[0,2,4,6,8]
let arr2=[1,3,5,7]


for(let c of arr1){
    if(c>3){
        console.log(c)
    }
}

for(let d of arr2){
    if(d>3){
        console.log(d)
    }
}

console.log(arr1.concat(arr2))
// const merge = (first, second) => {
//     for(let c of second) {
//       first.push(c);
//     }
//     return first;
//   }
// console.log(merge(arr1,arr2))

console.log(arr1.concat(arr2).sort())




