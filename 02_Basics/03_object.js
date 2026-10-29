//Object
// Objects are variables that can store both values and function

//singleton

//object literals

const JsUser = {
  name: "vishal",
  age: 21,
  location: "Ahmedabad",
  email: "vispan310@gmail.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser);

console.log(JsUser.email);
console.log(JsUser["email"]);

// JsUser.email = "vishalpanchal54.com";
// // Object.freeze(JsUser); //Object on which to lock the attributes.
// JsUser.email = "vkp1106@.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS");
};
console.log(JsUser.greeting());
