"use strict";
//An enum is a special "class" that represents a group of constants (unchangeable variables).
//Enums come in two flavors string and numeric.
//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value:
var CardinalDirections1;
(function (CardinalDirections1) {
    CardinalDirections1[CardinalDirections1["North"] = 0] = "North";
    CardinalDirections1[CardinalDirections1["East"] = 1] = "East";
    CardinalDirections1[CardinalDirections1["South"] = 2] = "South";
    CardinalDirections1[CardinalDirections1["West"] = 3] = "West";
})(CardinalDirections1 || (CardinalDirections1 = {}));
let currentDirection = CardinalDirections1.North;
// North is the first value so it logs '0'
//console.log(currentDirection);
var CardinalDirections2;
(function (CardinalDirections2) {
    CardinalDirections2[CardinalDirections2["North"] = 1] = "North";
    CardinalDirections2[CardinalDirections2["East"] = 2] = "East";
    CardinalDirections2[CardinalDirections2["South"] = 3] = "South";
    CardinalDirections2[CardinalDirections2["West"] = 4] = "West";
})(CardinalDirections2 || (CardinalDirections2 = {}));
// logs 1
//console.log(CardinalDirections2.North);
// logs 4
//console.log(CardinalDirections2.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
