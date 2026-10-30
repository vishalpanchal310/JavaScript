//constructors are blueprint used to create and initialize objects.
// const tinderUser=new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "vishal";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "vishal.com",
  fullname: {
    userfullname: {
      firstname: "vishal",
      lastname: "panchal",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "v" };
const obj2 = { 3: "b", 4: "p" };
const obj3 = { 3: "p", 4: "p" };

//const obj3 = { obj1, obj2 };
const obj4 = Object.assign(obj1, obj2, obj3);
//console.log(obj4);

const obj5 = { ...obj1, ...obj2 };
//console.log(obj5);

const users = [
  {
    id: 1,
    email: "vap.com",
  },
  {
    id: 1,
    email: "vap.com",
  },
  {
    id: 1,
    email: "vap.com",
  },
];

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
  coursename: "JavaScript",
  price: "Free",
  courseInstructor: "Vishal",
};
// course.courseInstructor;
// console.log(courseInstructor);

// const { courseInstructor: instructor } = course;
// console.log(instructor);

const navbar = ({ company }) => {};
navbar((company = "vishal"));

// JSON:JavaScript Object Notation
//It is the standard for data exchange in modern APIs, web applications, and cloud systems

/*
{
  "name":"vishal",
  "coursename":"JavaScript",
  "fees":"free"
} */
