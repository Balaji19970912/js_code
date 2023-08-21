console.clear();
const marvelHeros = ["Spiderman","Loki","Ironman"];
const dcHeroes = ["Batman","Blue Beetle","Superman"];

let superHeros1 = marvelHeros.concat(dcHeroes);
console.log(superHeros1);

//spread operator using this we can achieve multiple array_concatenation
let superHeros2 = [...marvelHeros,...dcHeroes];
console.log(superHeros2);

//array flat concepts where we can merge array within array within array

let flatArray = [1,2,[3,4],5,6,[7,[8,[9]]]];
console.log(flatArray.flat(Infinity));