var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function (s) {
        console.log("Hello " + s);
    };
    return Person;
}());
new Person().sayHello("John");
