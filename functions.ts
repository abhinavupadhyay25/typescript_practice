//Functions in typescript

function addTwo(num: number) {
  return num + 2;
}
//addTwo("five");
addTwo(5);

function getUpper(Val: string) {
  return Val.toUpperCase();
}
getUpper("uppercase");

function aboutUser(name: string, email: string, isPaid: boolean) {
  console.log(
    `user is ${name}, email is ${email} and billing status is ${isPaid}`
  );
}

aboutUser("user1", "user1@gmail.com", false);

let loginUser = (
  name: string,
  email: string = "h@h.com",
  isPaid: boolean = true
) => {
  console.log(
    `user is ${name}, email is ${email} and billing status is ${isPaid}`
  );
};

loginUser("user1", "user1@gmail.com");

//return type in functions

function sum(num1: number, num2: number): number {
  return num1 + num2;
}
let res = sum(30, 40);
console.log(res);

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
consoleError("Something went wrong");

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
handleError("Something went wrong");

//Arrow function
const getHello = (s: string): string => {
  return "";
};

//problematic situations

function getValue(myval: number) {
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

export {};
