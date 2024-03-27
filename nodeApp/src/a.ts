const x: number = 1;
console.log(x);

/*
Types provided by TS are number, String, boolean, null, undefined.
 : number is a TypeScript type annotation. It specifies that the variable x should be of type number. 
This is a way to add static type-checking to your code. 
*/

// To transpile this code enter "tsc -b" in the terminal and a .js file will be created
// To run the code we need to run that .js file => node dist/a.js

/* 
Note: When we declare a variable in one ts file, the same variable can't be used in other file.
Ex: In a.ts => const x: number = 1
    In b.ts => const x: number = 1 --> this can't be done because we have used x in a.ts
*/