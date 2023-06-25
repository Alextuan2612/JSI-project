//1:

arr1 = [1, 2, 4, 5, 6];
arr2 = [1, 6, 8, 9, 0]

const filter = arr1.filter(x => {
  return arr2.includes(x);
});

console.log(filter);

//2:

arr = [1, 54, 6, 7]
const newArr = arr.map(num => {
  return num + 5
})
console.log(newArr)

//3:

m = [1, 2, 4, 5, 6, 7]; n = [3, 5, 675, 8, 96];
num = [1, 8, 10, 96, 7]
//có thể thay đổi m bằng n để có thể duyệt mảng n hoặc duplicate function để duyệt mảng n sử dụng một function
const a = m.filter(x => {
  return !num.includes(x);
});
console.log(a)

//4:
players = [
  { id: 11, name: 'Messi', age: 33 }, { id: 12, name: 'Ronaldo', age: 34 }, { id: 13, name: 'Young', age: 35 }, { id: 14, name: 'Mane', age: 21 }, { id: 15, name: 'Salah', age: 24 },]
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);

}
const playersModified = convertArrayToObject(players, 'id');
console.log(playersModified)


