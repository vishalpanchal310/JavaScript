//function:reusable code of block
function sayMyName() {
  console.log("A");
  console.log("B");
  console.log("K");
  console.log("V");
  console.log("P");
  console.log("A");
}
//sayMyName();

// function addTwoNo(Number1, Number2)//number 1,2 are parameters
//  {
//   console.log(Number1 + Number2);
// }
// addTwoNo(3, 4); // 3,4 are argument

function addTwoNo(Number1, Number2) {
  let result = Number1 + Number2;
  console.log("vishal");
  return result;
}
const result = addTwoNo(11, 20);
// console.log("Result:", result);

function loginUserMsg(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username");
  }
  return `${username} just logged in`;
}
//console.log(loginUserMsg("panchal"));
// console.log(loginUserMsg("ram"));

function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500));
