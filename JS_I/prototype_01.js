console.clear()
Array.prototype.extraProperty = "Extra"
const myArr = [1,2,3,4,5]
for(i=0; i<(myArr.length); i++) {
    console.log(myArr[i])
}
for(i=0; i<myArr.length; i++) {
    if(myArr.hasOwnProperty(i)) {
        console.log(myArr[i]);
    }
}