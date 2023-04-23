// o método flat() serve para o cenário no qual voce tenha arrays de arrays [[1,2,3],[3,2,1]] e queira que se torne apenas um array

const array1 = [2, 3, 5];
const array2 = [6, 7, 9];
const array3 = [9, 10];

const allList = [array1, array2, array3].flat();

console.log(allList);
