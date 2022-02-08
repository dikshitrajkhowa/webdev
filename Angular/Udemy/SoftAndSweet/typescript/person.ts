/*
In typescript every file is a module
Typescripts and Angular modules are different
*/
export class Person {
    sayHello(name: string) {
        console.log("Hello", name);
    }
}

export function greeting(name: string) {
    console.log("Hello " + name);
}

var p1: Person = new Person();
p1.sayHello("Dikshit");

greeting("Dikshit")