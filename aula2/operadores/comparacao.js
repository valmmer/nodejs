// operadores de comparacao\

let a = 10;
let b = 5;
let c = 10;

// igualdade
let isEqual = a == b; // verifica se a é igual a b (valor)
let isStrictEqual = a === c; // verifica se a é estritamente igual a c (valor e tipo)
let isNotEqual = a != b; // verifica se a é diferente de b (valor)
let isStrictNotEqual = a !== c; // verifica se a é estritamente diferente de c (valor e tipo) 

console.log("Igualdade:", isEqual); // false
console.log("Igualdade Estrita:", isStrictEqual); // true   
console.log("Diferença:", isNotEqual); // true
console.log("Diferença Estrita:", isStrictNotEqual); // false
// comparação maior e menor
let isGreater = a > b; // verifica se a é maior que b
let isGreaterOrEqual = a >= c; // verifica se a é maior ou igual a c
let isLess = a < b; // verifica se a é menor que b  
let isLessOrEqual = a <= c; // verifica se a é menor ou igual a c
console.log("Maior que:", isGreater); // true
console.log("Maior ou Igual:", isGreaterOrEqual); // true   
console.log("Menor que:", isLess); // false
console.log("Menor ou Igual:", isLessOrEqual); // true

