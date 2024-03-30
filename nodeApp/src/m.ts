/* 
Pick: Let us say we have a user info which contains id, email, password, firstname, and lastname. Now, we want to update only 
the password, firstname, and lastname. For that, we can write a TypeScript function that accepts only the password, firstname, and 
lastname parameters. 
*/

interface UserInfo {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

// function updateUserInfo(password: string, firstname: string, lastname: string) {
//   // logic to update names
// }

// The problem with the above approach is that the function has multiple arguments, which can be error-prone and harder to maintain.
// The general rule of thumb is that a function should have as few arguments as possible.

// Another way is to define an interface that contains only the required fields to be updated.
interface UpdatedInfo {
    password: string;
    firstname: string;
    lastname: string;
}

// function updateUserInfo(updatedInfo: UpdatedInfo) {
//   // logic to update names
// }

/* The problem here is that if we perform any changes in the UserInfo interface, we need to perform those changes in the UpdatedInfo interface as well.
For example, if we change the type of password to number in UserInfo, we also need to change that type in UpdatedInfo.
So, somehow we need to make a subset of UserInfo to solve these issues. This is where the Pick utility type comes into play. */

type UpdatedProps = Pick<UserInfo, 'password' | 'firstname' | 'lastname'>;

// The UpdatedProps type now contains only the properties 'password', 'firstname', and 'lastname' from the UserInfo interface.
// We can use this type as the parameter for the updateUserInfo function:

function updateUserInfo1(updatedInfo: UpdatedProps) {
  // logic to update names
}

// If we change the type of password in the UserInfo interface, the UpdatedProps type will automatically reflect that change,
// eliminating the need to update both interfaces separately.