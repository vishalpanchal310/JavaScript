const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map((num) => {
  return num + 10;
});
console.log(newNumbers);

//chaining map and filter methods:
// used to perform multiple operations on an array in a single line of code. The map method is used to transform the elements of an array, and the filter method is used to filter the elements of an array based on a condition.

const newNums = myNumbers.map((num) => num * 10).filter((num) => num > 15);
console.log(newNums);
