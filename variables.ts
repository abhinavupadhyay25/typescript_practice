/*There are three main primitives in JavaScript and TypeScript.

boolean - true or false values
number - whole numbers and floating point values
string - text values like "TypeScript Rocks"

There are also 2 less common primitives used in later versions of Javascript and TypeScript.

bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
symbol are used to create a globally unique identifier.*/

//Explicit type-assignmet:
/*
Syntrax : 
let variableName: type = value 
*/

//string
let greetings: string = "good morning";

//number
let userId: number = 334455;

//boolean
let isLoggedIn: boolean = false;

//Type Inference in Typescript

let age = 34;

//age = "seven";

/*any : 

1. TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

2. When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal*/

let hero;

function getHero() {
  return "thor";
}

hero = getHero();

export {};
