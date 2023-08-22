const sym1 = Symbol('786');

const jsObject = {
    name: "Balaji S",
    "full name": "Balaji S Tanganoor",
    emailid: "balaji.s@heyman.com",
    age: 25,
    isLoggedIn: true,
    lastLoggedIn: ['Monday'],
    [sym1]: 'key1'
}

console.log(jsObject.lastLoggedIn);
console.log(jsObject[sym1]);
console.log(jsObject);
console.log(jsObject["full name"]);