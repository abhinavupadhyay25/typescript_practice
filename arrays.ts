//Arrays in typescript

const arr1 = ["php", "node", "django"]; //type inference => type:string

arr1[2] = "c++";

console.log(arr1);

//const arr2:string=['a','b','c'] // Error : Type 'string[]' is not assignable to type 'string'

const arr3: string[] = ["java", "python", "go", "rust"];

arr3.push("c");

console.log(arr3);
