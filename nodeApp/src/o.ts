/*
readonly:
If you see when we assign const for a string, number etc. then if we want to re-assign them with new values we can't do that, it will 
throw us an error.
But when we assign const for an object, array etc. then if we want to re-assign the values present inside the object then there will 
be no error.
This is because in objects we are updating the inner values of object we are not changing or re assigning the object itself.
Let us understand it with below code :
*/

const obj = {
    name: "Abhiram",
    age: 20,
}

obj.name = "Abhiram2k03";  // this can be done

// But here we are re-assigning the complete object with new values so it will throw an error = Cannot assign to 'obj' because it is a constant.

// obj = {
//     name: "Abhiram2k03",
//     age: 20,
// }


// Now what if we don't want to change the values of an object also, in this case we can use readonly

type obj= {
    readonly name: string;
    readonly age: number;
}

const obj1: Readonly<obj> = {
    name: "Abhiram",
    age: 20,
}