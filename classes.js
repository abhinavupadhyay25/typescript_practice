var Point = /** @class */ (function () {
    function Point() {
        this.x = 10;
        this.y = 20;
    }
    return Point;
}());
var pt = new Point();
// Prints 0, 0
console.log("".concat(pt.x, ", ").concat(pt.y));
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    return Person1;
}());
var person1 = new Person1("Jane");
//console.log(Person);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
console.log(person.getName());
