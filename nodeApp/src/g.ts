/*
Implementing interfaces
Interfaces have another special property. You can implement interfaces as a class.
Let’s say you have an person interface - 
*/

interface Person{
    name: string;
    age: number;
    greet(phrase: string): void;
}

// class that implements this interface 
// all the classes which are implementing should have name, age and greet
class Employee1 implements Person{
    name: string;
    age: number;

    constructor(n:string, a:number){
        this.name = n;
        this.age= a;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`)
    }
}


const e = new Employee1("Abhiram", 20);
console.log(e.name);

//This is useful since now you can create multiple variants of a person (Manager, CEO ...)
// JS does not have interfaces
// Types and interfaes are almost similar the only difference is that with types we can't implement classes
// In codebases interfaces are preferred above types.