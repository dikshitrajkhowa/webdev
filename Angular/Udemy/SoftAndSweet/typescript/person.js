"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function (name) {
        console.log("Hello", name);
    };
    return Person;
}());
exports.Person = Person;
function greeting(name) {
    console.log("Hello " + name);
}
exports.greeting = greeting;
var p1 = new Person();
p1.sayHello("Dikshit");
greeting("Dikshit");
