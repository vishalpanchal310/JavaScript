//JavaScript, the call() method is used to call a function while explicitly setting the value of this.
//call() allows us to borrow a function from one object and use it with another object.

function SetUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
