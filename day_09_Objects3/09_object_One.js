console.clear()
const heyManUser = {}

heyManUser.id = "User1"
heyManUser.fullName = {
    userfullName : {
        firstname: "Balaji",
        middlename: "S",
        lastname: "Tanganoor"
    }
}

// console.log(heyManUser.fullName.userfullName);
console.log(Object.keys(heyManUser));
console.log(Object.values(heyManUser));
console.log(Object.entries(heyManUser));