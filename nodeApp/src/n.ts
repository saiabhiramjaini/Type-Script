/* 
partial:
Now in realworld a user will not update all the fields at a time, he might update only firstname and etc.
But, previously our update function seeks for all the fields that can be updated.
To solve this issue we can use Partial


*/

interface UserInfo1 {
    id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
}

type UpdatedProps1 = Pick<UserInfo1, 'password' | 'firstname' | 'lastname'>;

type UpdatedPropsOptional = Partial<UserInfo1>;  // it will mark all the fields as optional

function updateUserInfo(updatedInfo: UpdatedPropsOptional) {
    // logic to update names
  }