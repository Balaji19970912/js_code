const arr = [0,1,2,3,4,5,6,7,8,9]

const myNewArr = arr.map( (arr) => arr * 10).map( (arr) => arr + 1).filter((arr) => arr > 40)

console.log(myNewArr);