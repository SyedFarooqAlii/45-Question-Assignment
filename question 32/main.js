"use strict";
let current_users = [`Ali`, `Fawwad`, `hasan`, `izhan`, `ebad`, `babar`];
let new_users = [`Ali`, `Fawwad`, `hasan`, `amir`, `ebad`];
new_users.forEach(new_users => {
    let lowercase = new_users.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(lowercase)) {
        console.log(`The User Name ${new_users} is not available. Please write a different username.`);
    }
    else {
        console.log(`The user name ${new_users} is available`);
    }
});
