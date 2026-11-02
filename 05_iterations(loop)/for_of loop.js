// for of loop :
// for of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.)
//  and execute a block of code for each element in the iterable.
const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  //console.log(item);
}

const greeting = "Hello world!";
for (const greet of greeting) {
  // console.log(greet);
  //console.log(`Each character in the string is: ${greet}`);
}

// Maps:
// map is a collection of key-value pairs where each key is unique and maps to a specific value.
//dup`licate keys are not allowed in a map, and if you try to add a key that already exists, the new value will overwrite the old value.
// syntax:
// const map = new Map();
// map.set(key, value);
const map = new Map();
map.set("IN ", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("CA", "Canada");
map.set("AU", "Australia");

console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};
for (const [key, value] of myobject) {
  // console.log(key, ":-", value);
  //not working because for of loop cannot be used to iterate over objects directly. Instead, you can use Object.entries() to convert the object into an array of key-value pairs and then use for of loop to iterate over it.
}
