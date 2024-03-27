// Adding types to arguments of a function.

function greet(name: string){
    console.log("Hello " + name);
}

greet("Abhiram");
//greet(123)    //throws an error because we need to pass only strings


function sum(a:number, b:number){
    return a+b;
}
//In the above code we nowhere mentioned the return type for a function.
console.log(sum(1,2));


function product(a:number, b:number) : number{
    return a*b;
}
// In this code we have added a : number at the end of function name which is return type of function.
// We have declared return type explicitly.
console.log(product(4,5));


/*
If you see here, eventhough we haven't assigned any return type to function 'sum' it implicitly declares a return type.
This is called "type inference".
When we give a wrong return type "function product(a:number, b:number) : string"then this type inference throws an error saying :
Type 'number' is not assignable to type 'string'.
So, it is suggested not to add return type explicitly, ofcourse you can add them when ever there is requirement.
*/


function isAdult(age: number){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}

console.log(isAdult(20));