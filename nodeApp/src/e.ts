/*
How can we assign types to a object ?
For example, a user object that looks like this -
*/

const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com",
	age: 21,
}

// To assign a type to the user we use interfaces.

interface User {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
}

function isLegal(user: User){
    if(user.age > 18){
        return true;
    }else{
        return false;
    }
}

console.log(isLegal({
    firstname: "Abhiram",
    lastname: "jaini",
    email: "abhiramjaini28@gmail.com",
    age: 20
}))