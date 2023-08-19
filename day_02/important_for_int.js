Array.prototype.myUcase = "Luffy";
let newArray = [1,2,3,4,5,6];
for(let i in newArray) {
    if(newArray.hasOwnProperty(i)) {
        console.log(i);
    }
}