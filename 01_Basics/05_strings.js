// const name = "Vishal";
// const repoCount = 20;

// // console.log(name + " has " + repoCount + " repositories");

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`);

const gameName = new String("PANCHAL");
console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase);

console.log(gameName.charAt(2)); //To find whicch character is on particular index
console.log(gameName.indexOf("H")); // To find posisition of element

//Slicing

const fruit = "vegetable";
console.log(fruit.substring(0, 3));

const veg = gameName.slice(1, -1);
console.log(veg);

const newOne = "   vishal   ";
console.log(newOne);
console.log(newOne.trim());
//trim() fun. used to remove unnecessary space

console.log(newOne.toUpperCase());

const url = "https://vishal.com/vishal$6panchal";
console.log(url.replace("$6", "-"));

console.log(url.includes("vishal")); //Find string

const bca = "AB V P";
console.log(bca.split(" ")); //split divides a string into an array of substrings
