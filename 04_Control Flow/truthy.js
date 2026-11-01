const userEmail = "";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}
/*
--> Falsy Values:
falsy values in JavaScript are values that evaluate to false in a boolean context. 
The following values are considered falsy:
- false
- 0
- -0
- 0n (BigInt zero)
- "", '', `` (empty string)
- null
- undefined
- NaN

-->Truthy Values:
Truthy values are values that evaluate to true in a boolean context.
the following values are considered truthy:
- true
- any non-zero number (e.g., 1, -1, 3.14)
- any non-empty string (e.g., "hello", 'world', `template literal`)
- any object (e.g., {}, [], function() {})
- any non-null value (e.g., {}, [], function() {}, new Date())
*/

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is  empty");
}

//Nullish Coalescing Operator (??):
//It is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val;
// val = 5 ?? 10; // returns 5 because 5 is not null or undefined
// val = null ?? 10; // returns 10 because the left-hand side is null
// val = undefined ?? 10; // returns 10 because the left-hand side is undefined
val = null ?? 10 ?? 20; // returns 10 because the left-hand side is null, so it evaluates the right-hand side and returns 10

console.log(val);

//Ternary Operator (Conditional Operator):
//It is a conditional operator that takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.

// syntax:
// condition ? expressionIfTrue : expressionIfFalse;

const iceCream = "chocolate";
iceCream === "chocolate"
  ? console.log("Yay! I love chocolate ice cream!")
  : console.log("Aww! I prefer chocolate ice cream.");
