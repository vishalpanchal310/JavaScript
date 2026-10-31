// Immediately Invoked Function Expressions(IIFE)
//(IIFE) is a JavaScript function that runs as soon as it is defined
/*
Use Cases:
Variables declared inside an IIFE are not accessible from the outside, preventing naming conflicts and global pollution

Syntax:
(function () {
  // Code executes immediately
})();   
*/
(function chai() {
  console.log("DB Connected");
})();

((name) => {
  console.log(`DB Connected Two ${name}`);
})("vishal");
