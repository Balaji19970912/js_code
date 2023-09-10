const myArr = [0,1,2,3,4,5,6,7,8,9]

// const myNewArr = myArr.filter( (num) => num > 4)
const myNewArr = myArr.filter( (num) => {
    return num > 4
})

console.log(myNewArr)