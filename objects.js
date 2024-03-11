"use strict";
//object type in typescript
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "user1",
    email: "user1@gmail.com",
    isActive: true,
};
console.log(user.name);
//function createUSer({ name: string, isPaid: boolean }) {}
//createUSer({ name: "user2", isPaid: false });
//createUSer({ name: "user2", isPaid: false, email: "user2@gmail.com" }); //Error
let newUser = { name: "user2", isPaid: false, email: "user2@gmail.com" };
//createUSer(newUser); //gives no error
//function returning an object
// function createCourse(): {} {
//   return {};
// }
function createCourse() {
    return { name: "react", price: 399 };
}
