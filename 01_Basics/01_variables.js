// Use const by default when you don't need to reassign the variable.
// Use let when you need to reassign it.
// Avoid var in most new code because its function-scoping

const accountId = 123456;
let accountEmail = "vishalpanchal@google.com";
var accountPassword = "12345";
let accountState;

//accountId = 4 // not allowed
accountEmail = "vispan.com";
accountPassword = "1106";
accountState = "California";
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountState]);
