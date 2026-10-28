/*Two types of data types in javascript are :
==>primitive and non-primitive data types.
>Primitive types are immutable, stored directly in memory, and passed by value.
>Non-primitive types are mutable, stored in the heap, and passed by reference (address)

-->Primitive data types include string, number, boolean, null, undefined, and symbol.
--> Non-primitive data types include objects, arrays, and functions.
*/

const score = 100; //number type
const score1 = "vishal"; //string type
const isLoggedIn = true; //boolean type
const isLoggedIn1 = false; //boolean type
const user = null; //null type
let data; //undefined type

const id = Symbol("123"); //symbol type
const id1 = Symbol("123"); //symbol type

console.log(id === id1); //false

const heros = ["shaktiman", "naagraj", "doga"]; //array type
const myObj = {
  name: "vishal",
  age: 22,
}; //object type

//Functions are reusable code blocks designed for particular tasks
function myFunc() {
  console.log("hello world");
}
myFunc(); //function call

// console.log(typeof score);
// console.log(typeof score1);
// console.log(typeof isLoggedIn);
// console.log(typeof isLoggedIn1);
// console.log(typeof user);
// console.log(typeof data);
// console.log(typeof id);
// console.log(typeof heros);
// console.log(typeof myObj);
// console.log(typeof myFunc);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Memory Allocation in Javascript~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*Stack Memory: Stack memory is used for static memory allocation, which means that the memory is allocated at compile time. It is used to store primitive data types and function calls. The stack memory is limited in size and can lead to stack overflow if too much memory is allocated.

Heap Memory: Heap memory is used for dynamic memory allocation, which means that the memory is allocated at runtime. It is used to store non-primitive data types such as objects and arrays. The heap memory is larger than the stack memory and can grow or shrink as needed, but it can also lead to memory leaks if not managed properly.
*/

let myName = "vishal"; //stored in stack memory
let anotherName = myName; //stored in stack memory
anotherName = "panchal"; //stored in stack memory

console.log(myName);
console.log(anotherName);

let userOne = {
  email: "vishal@example.com",
  upi: "vishal@upi",
};
let userTwo = userOne; //stored in heap memory
userTwo.email = "vispan@example.com";
console.log(userOne.email);
console.log(userTwo.email);

console.log(typeof userOne);
