// importing and exporting files

// TypeScript follows the ES6 module system, using import and export statements to share code between different files. 

// 1. constant exports:

// in math.ts file:
export function add(x: number, y: number): number {
    return x + y;
}

export function subtract(x: number, y: number): number {
    return x - y;
}

// in main.ts file:
/*
import { add } from "path"
add(1, 2)
*/


// 2. default exports:

export default class Calculator {
    add(x: number, y: number): number {
        return x + y;
    }
}

// in calculator.ts
/*
import Calculator from './Calculator';

const calc = new Calculator();
console.log(calc.add(10, 5));
*/
