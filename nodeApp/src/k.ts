/*
Generics
Generics are a language independent concept (exist in C++ as well)
Let’s learn it via an example
*/

// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.

function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el1 = getFirstElement([1, 2, 3]);
console.log(el1);

const el2 = getFirstElement(["Abhiram", "Jaini"])
console.log(el2);
// console.log(el2.toUpperCase()); // this will cause us an error

/* 
Here a user can give number input or string input. Now the problem is when we apply specific methods like ".toUpperCase()" etc.
error occurs because we have defined the type of the array as string or number, in that case if the array is of numbers type then
string related methods can't be applied.
Error: Property 'toUpperCase' does not exist on type 'string | number'.
       Property 'toUpperCase' does not exist on type 'number'.
But we expect typescript to detect the input type and provide it's methods accordingly.
However, TypeScript's type system is not designed to dynamically adjust the types based on runtime values.
*/


// Solution - Generics

// Generics enable you to create components that work with any data type while still providing compile-time type safety

/* 
This indicates that the function can accept any type, and T represents that type. The function takes a single argument arg of 
type T and returns a value of the same type T. This means whatever type you provide as an argument, the function will return the 
same type.
*/
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);


// Solution for original problem:

function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement1(["abhiram", "jaini"]);
console.log(el.toUpperCase())

const el3 = getFirstElement1(["abhiram", "jaini", 1, 2]) // it can store strings and numbers as well
const el4 = getFirstElement1<string>(["abhiram", "jaini"]);  // it will only contain strings
const el5 = getFirstElement1<number>([1, 2]); // it will only contain numbers