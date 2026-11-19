/*
const user = {
  username: "vishal",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username:${this.username}`);
    console.log(this); //this-> print current context
  },
};

console.log(user.username);
//console.log(user.getUserDetails)//Access the function
console.log(user.getUserDetails()); //Execute the function
*/

// constructor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  };
}
//new keyword is used to create a new instance of an object using a constructor function or class.
const userOne = new User("vishal", 11, true); //constructor
const userTwo = new User("Panchal", 20, false);
console.log(userOne);
console.log(userTwo);

// new keyword:
// -first creates a empty object called instance
// -then calle a constructor function
