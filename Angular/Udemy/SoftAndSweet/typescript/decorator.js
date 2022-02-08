var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function (name) {
        console.log("Hello", name);
    };
    return Person;
}());
new Person().sayHello("Dikshit");
