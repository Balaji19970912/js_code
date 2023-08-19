console.clear();
let newDate = new Date();
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toLocaleString());
console.log(typeof newDate);

let anotherDate = newDate.toLocaleString('default',{
    weekday: "long"
});
console.log(anotherDate);