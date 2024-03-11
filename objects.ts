//object type in typescript

const user: { name: string; email: string; isActive: boolean } = {
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

function createCourse(): { name: string; price: number } {
  return { name: "react", price: 399 };
}

export {};
