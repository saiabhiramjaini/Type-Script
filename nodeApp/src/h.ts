// Union = Let’s say you want to print the id of a user, which can be a number or a string.

type stringOrNumber = string | number;

function printUserId(id: stringOrNumber){
    console.log(id);
}

printUserId("123");
printUserId(123);


// Intersection: What if you want to create a type that has every property of multiple types/ interfaces

type Employee2 = {
    name: string;
    startDate: Date;
};

// this can also be a type
interface Manager1{
  name: string;
  department: string;
};
  
// we can only use type here
type TeamLead1 = Employee2 & Manager1;

const teamLead1: TeamLead1 = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};


/*
finally what is the difference between interfaces and types?
1. interface can be implemented types can't be implemented
2. we can't perform union and intersection with interfaces
*/

// Exclude: used when we want to exclude some of the types from a given type.

type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// handleEvent('scroll'); // Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.