//An enum is a special "class" that represents a group of constants (unchangeable variables).

//Enums come in two flavors string and numeric.

//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:

enum CardinalDirections1 {
  North,
  East,
  South,
  West,
}

let currentDirection = CardinalDirections1.North;

// North is the first value so it logs '0'
//console.log(currentDirection);

enum CardinalDirections2 {
  North = 1,
  East,
  South,
  West,
}
// logs 1
//console.log(CardinalDirections2.North);
// logs 4
//console.log(CardinalDirections2.West);

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
