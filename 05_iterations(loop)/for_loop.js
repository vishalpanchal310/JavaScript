//for loop: used to repeat a block of code a certain number of times
//syntax:
// for (initialization; condition; increment/decrement) {
//   // code to be executed
// }

for (let i = 0; i < 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is found");
  }
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  //console.log(`outer loop value: ${i}`);
  for (let j = 0; j <= 10; j++) {
    // console.log(`outer loop value: ${j} and inner loop value: ${i}`);
    //console.log(`${i} * ${j} = ${i * j}`);
  }
}

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < myArray.length; i++) {
  //console.log(myArray[i]);
}

// break and continue keywords:
// break: used to exit a loop or switch statement before it has completed all its iterations
// continue: used to skip the current iteration of a loop and move on to the next iteration

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("10 is found");
    break; // exit the loop when i is 10
  }
  // console.log(`value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("10 is found");
    continue; // skip the current iteration when i is 10
  }
}
