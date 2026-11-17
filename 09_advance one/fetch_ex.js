fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  //The arrow function (data) => { ... } acts as a callback function that receives the successful result from the previous Promise and prints it using console.log(data).
  .catch((error) => {
    console.log("Error:", error);
  });
// node "09_advance one/fetch_ex.js"
