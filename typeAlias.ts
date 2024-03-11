type User = {
  name: string;
  email: string;
  isActive: boolean;
};

const user1: User = {
  name: "ajay",
  email: "ajay@gmail.com",
  isActive: true,
};

const user2: User = {
  name: "akash",
  email: "akash@gmail.com",
  isActive: false,
};

console.log(user2.email);
console.log(user1.isActive);

function createUser1(user: User) {
  console.log(
    `user is ${user.name}, email is ${user.email} and active status is ${user.isActive}`
  );
}

createUser1({ name: "user1", email: "user1@example.com", isActive: false });

function createUser2(user: User): User {
  return {
    name: "user2",
    email: "user2@example.com",
    isActive: true,
  };
}

export {};
