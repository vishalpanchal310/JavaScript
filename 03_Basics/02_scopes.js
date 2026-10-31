// var : Function Scope
// let : Block Scope
// const : Block Scope

/*
let a = 50; //Global Scope
if (true) {
  let a = 10; //Local Scope
  const b = 20;
  var c = 30;
  console.log("Inner", a);
}
console.log(a);
// console.log(b);
console.log(c);
*/

//Nested
function one() {
  const username = "vishal";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //console.log(website); // can not access
  two();
}
//one();

if (true) {
  const username = "vishal";
  if (username === "vishal") {
    const website = "youtube";
    console.log(username + website);
  }
  //console.log(website); // can not access (scope)
}
//console.log(username); // can not access (scope)

//==========================+++++++++

console.log(addone(7));
function addone(num) {
  return num + 1;
}
console.log(addone(5));

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(9));
