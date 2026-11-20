// A Prototype is an object from which other objects can inherit properties and methods.
// alt + z
// let myName = "vishal  ";

// console.log(myName.length);
// console.log(myName.trim().length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.vishal = function () {
  console.log(`vishal is present in all objects`);
};

Array.prototype.heyVishal = function () {
  console.log(`Vishal says hello!`);
};
//heroPower.vishal();
//myHeros.vishal();
myHeros.heyVishal();

//      inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "vishal    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is:${this.trim().length}`);
};

anotherUsername.trueLength();
"vishal".trueLength();
"iceTea".trueLength();
