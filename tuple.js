"use strict";
//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.
let ourTuple;
ourTuple = [5, false, "typescript"];
//A good practice is to make your tuple readonly.
const ourReadonlyTuple = [
    5,
    true,
    "javascript",
];
//ourReadonlyTuple.push('python'); // error: Property 'push' does not exist on type 'readonly [number, boolean, string]'.
//destructuring tuples:
const graph = [55.2, 41.3];
const [x, y] = graph;
console.log(graph[0]);
