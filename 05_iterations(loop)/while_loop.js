//while loop:
//used to repeat a block of code as long as a specified condition is true
//syntax:
// while (condition) {
//   // code to be executed
// }

let i = 0;
while (i < 10) {
  // console.log(i);
  i = i + 2;
}

//do while loop:
//used to repeat a block of code at least once, and then continue repeating it as long as a specified condition is true
//syntax:
// do {
//   // code to be executed
// } while (condition);

let j = 11;
do {
  console.log("score is", j);
  j++;
} while (j < 10);
