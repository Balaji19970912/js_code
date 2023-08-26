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

jsObject.greetings = function() {
    console.log("Hi There");
}

jsObject.greetingsTwo = function() {
    console.log(`Hi There, ${this["full name"]}`);
}

// console.log(jsObject.lastLoggedIn);
// console.log(jsObject[sym1]);
// console.log(jsObject);
// console.log(jsObject["full name"]);

console.log(jsObject.greetings());
console.log(jsObject.greetingsTwo());