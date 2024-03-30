// Declaring an object in TS:

type Customer = {
    id: number;
    username: string;
}

// This is an index signature that allows us to create an object
// where the keys are strings and the values are of type Customer
type Customers = {
     [key: string]: Customer;
}

const customers: Customers = {
    "cust1": { 
        id: 1, 
        username: "Abhriam" 
    },
    "cust2": { 
        id: 2, 
        username: "aashish" 
    }
}

// Here, we have an object called 'customers' of type 'Customers'
// The keys of this object are strings ('cust1' and 'cust2')
// The values are objects of type 'Customer'
// For example, the value associated with the key 'cust1' is { id: 1, username: 'Abhriam' }
// If you see this code it is a bit complex and ugly.
// So TS developers have developed a newer way to define types for an object


/*
Records: Record let’s you give a cleaner type to objects
*/

interface Customer1 {
    id: string;
    name: string;
}
  
type Customers1 = Record<string, Customer1>;
  
const customers1: Customers1 = {
    'abc123': { 
        id: 'abc123', 
        name: 'John Doe' 
    },
    'xyz789': { 
        id: 'xyz789', 
        name: 'Jane Doe' 
    },
};
  
console.log(customers1['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// Maps: maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

interface Customer2 {
    id: string;
    name: string;
}
  
// Initialize an empty Map
const CustomerMap = new Map<string, Customer2>();
  
// Add users to the map using .set
CustomerMap.set('abc123', { id: 'abc123', name: 'John Doe' });
CustomerMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
// Accessing a value using .get
console.log(CustomerMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


// Maps are available in JS. Records are available in TS.