//Control flow / Logic flow

//if
/*if (condition) {
    //code to be executed if condition is true
}
else {
    //code to be executed if condition is false
}
*/

/*
const isUserrLoggedIn = true;
if (isUserrLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

if (2 == "2") {
  console.log("2 is equal to '2'");
}

if (2 === "2") {
  // === checks for both value and type equality
}
console.log("2 is not  equal to '2' ");

if (2 != "3") {
  // != checks for value equality only
  console.log("2 is not equal to '3'");
}
*/

const temperature = 30;
if (temperature >= 30) {
  console.log("It's a hot day");
} else {
  console.log("It's not a hot day");
}

const score = 100;
if (score > 50) {
  const power = "fly";
  console.log(`User power:${power}`);
}

//Nested if statements
/*const balance = 1000;
if (balance < 500) {
  console.log("less than 500");
} else if (balance >= 500 && balance < 1000) {
  console.log("between 00 and 1000");
} else {
  console.log("less than 1200");
}
*/

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard && 2 == 2) {
  console.log("User can make a purchase");
}

const loggedInfromGogle = true;
const loggedInfromEmail = false;

if (loggedInfromGogle || loggedInfromEmail) {
  console.log("User is logged in");
}
