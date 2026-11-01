//switch case: Used to perform different actions based on different conditions.
//  It is an alternative to using multiple if...else statements.

/*  Syntax:
switch (expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  default:
  // code to be executed if none of the cases match
}
*/

const month = "june";
switch (month) {
  case "january":
    console.log("January");
    break;
  case "february":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  default:
    console.log("Invalid month");
}
