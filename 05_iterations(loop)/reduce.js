// reduce : used to accumulate values from an array and return a single result.
// syntax:
// array.reduce((accumulator, currentValue) => {
//   // code to be executed
// }, initialValue);

// const numbers = [1, 2, 3, 4, 5];

// numbers.reduce((accumulator, currentValue) => {
//   // console.log(`accumulator: ${accumulator}, currentValue: ${currentValue}`);
//   return accumulator + currentValue;
// }, 0);
// console.log(
//   numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0),
// );

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
