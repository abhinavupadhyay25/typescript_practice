"use strict";
//Functions in typescript
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
//addTwo("five");
addTwo(5);
function getUpper(Val) {
    return Val.toUpperCase();
}
getUpper("uppercase");
function aboutUser(name, email, isPaid) {
    console.log(`user is ${name}, email is ${email} and billing status is ${isPaid}`);
}
aboutUser("user1", "user1@gmail.com", false);
let loginUser = (name, email = "h@h.com", isPaid = true) => {
    console.log(`user is ${name}, email is ${email} and billing status is ${isPaid}`);
};
loginUser("user1", "user1@gmail.com");
//return type in functions
function sum(num1, num2) {
    return num1 + num2;
}
let res = sum(30, 40);
console.log(res);
function consoleError(errmsg) {
    console.log(errmsg);
}
consoleError("Something went wrong");
function handleError(errmsg) {
    throw new Error(errmsg);
}
handleError("Something went wrong");
//Arrow function
const getHello = (s) => {
    return "";
};
//problematic situations
function getValue(myval) {
    if (myval > 5) {
        return true;
    }
    return "200 Ok";
}
// function getValue(myval: number): string {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 Ok";
// }
// function getValue(myval: number): boolean {
//   if (myval > 5) {
//     return true;
//   }
//   return "200 Ok";
// }
console.log(getValue(10));
