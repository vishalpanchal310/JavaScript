/*this:(current context)
this keyword refers to the object that is executing the current function, 
but its specific value is determined by how the function is called (runtime binding),
 not where it is defined. 
*/
const user = {
  username: "vishal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    // console.log(this); //current contetx
  },
};
user.welcomeMessage();

/*
function chai() {
  let username = "vishal";
  console.log(this);
}
chai();
*/

// const chai = function () {
//   let username = "vishal";
//   console.log(this.username);
// };

const chai = () => {
  let username = "vishal";
  console.log(this);
};

//Arroe function
//Arrow functions are primarily used for callbacks, array methods

//syntax:  () => {}

//Explicit return
// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(addTwo(3, 4));

//Implicit return
// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(3, 4));

//  Object return
const add = (num1, num2) => ({ username: "vishal" });
console.log(add(8, 5));
