const myNums = [1,2,3,4,5,6,7,8,9,0]

const myTotal = myNums.reduce( function(acc, curVal) {
    console.log(`Acc :- ${acc} and curVal :- ${curVal}`);
    return acc + curVal
}, 0)

const myTotal2 = myNums.reduce((acc,curr) => {return acc+curr}, 0)

console.log(myTotal)
console.log(myTotal2)