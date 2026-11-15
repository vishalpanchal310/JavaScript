/*
-A Promise in JavaScript is an object that represents the result of an asynchronous operation

-->A Promise has three states:
Pending:
 -The operation is still running. We are waiting for the result.
Fulfilled:
 -The operation completed successfully.
Rejected:
 -The operation failed.

Example:
const promiseOne = new Promise(function(resolve, reject) {

    // Do some asynchronous task

    let success = true;

    if (success) {
        resolve("Task completed successfully");
    } else {
        reject("Something went wrong");
    }

});


-->try and catch are used for error handling.
- try: Contains code that might produce an error.
- catch: Executes when an error occurs in the try block.

resolve() means success.
reject() means failure.
.then() handles the successful result.
*/

const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task:- DB calls,cryptography,network
  setTimeout(function () {
    console.log("Async task is completely");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 3000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // let error = true;
    let error = false;
    if (!error) {
      resolve({ username: "vishal", password: "1106" });
    } else {
      reject("ERROR:Something went wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    // let error=true
    if (!error) {
      resolve({ username: "JavaScript", password: "2010" });
    } else {
      reject("ERROR:JS went wrong");
    }
  }, 4000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
/*
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers();  */

//using .then and .catch

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
