/*
What are types?
Very similar to interfaces , types let you aggregate data together.
*/

type User1 = {
	firstName: string;
	lastName: string;
	age: number;
}

// But they let you do a few other things.
 
// 1. Unions: Let’s say you want to print the id of a user, which can be a number or a string.

type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

// 2. Intersection: What if you want to create a type that has every property of multiple types/ interfaces.

type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
  