console.clear();
const myarray = [10,20,30,40,50];
const newArray1 = myarray.slice(1,3);

console.log("Original Array ====> "+myarray);
console.log("New Array1 ====> "+newArray1);

const newArray2 = myarray.splice(1,3);

console.log("Original Array ====> "+myarray);
console.log("New Array1 ====> "+newArray2);
