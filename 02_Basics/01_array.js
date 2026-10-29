//An Array is an object type designed for storing data collections.

const myArr = [0, 1, 5, 3, 4, "vishal"];
console.log(myArr[2]);

const myArr2 = ["Vishal", "Panchal"];

const myArr3 = new Array(1, 2, 3, 4);

//Array methods

// myArr.push(6, 7);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

//myArr.unshift(5);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join(); //Adds all the elements of an array into a string, separated by the specified separator string.
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//      slice,splice

//slice() extracts a portion of an array into a new array without modifying the original
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

//splice() modifies the original array by adding, removing, or replacing elements.
const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
