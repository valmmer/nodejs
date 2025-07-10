// operadores logicos
// && (E lógico) - Retorna verdadeiro se ambos os operandos forem verdadeiros
// || (OU lógico) - Retorna verdadeiro se pelo menos um dos operandos for verdadeiro

const a = true;
const b = false;
const c = true;
const d = false;
//logicos
const and = a && b; // false, pois b é falso
console.log("E lógico:", and); // false
const or = a || b; // true, pois a é verdadeiro
console.log("OU lógico:", or); // true
const not = !a; // false, pois a é verdadeiro
console.log("NÃO lógico:", not); // false
const and2 = c && d; // false, pois d é falso
console.log("E lógico 2:", and2); // false
const or2 = c || d; // true, pois c é verdadeiro
console.log("OU lógico 2:", or2); // true
const not2 = !c; // false, pois c é verdadeiro
console.log("NÃO lógico 2:", not2); // false
const complexLogic = (a && b) || c || d; // true, pois c é verdadeiro
console.log("Lógica Complexa:", complexLogic); // true

// Operadores lógicos são usados para combinar expressões booleanas
// e são fundamentais para a lógica de controle de fluxo em programação.
userName = "João"; // aspas e texto
userAge = 17; // sem aspas numero
// faixa de idade
userAgeRange = userAge >= 18 && userAge <= 65; // verifica se a idade está entre 18 e 65 anos
console.log(
  "Ola, meu nome e " +
    userName +
    ", Tenho " +
    userAge +
    " anos e estou na faixa etária de 18 a 65 anos: " +
    userAgeRange
); // João, 30, true

if (userAgeRange) {
  console.log("Você está na faixa etária de 18 a 65 anos.");
} else {
  console.log("Você não está na faixa etária de 18 a 65 anos.");
}

// Operadores lógicos são essenciais para a construção de condições complexas
// e são amplamente utilizados em estruturas de controle como if, while e for.
// Eles permitem que você tome decisões com base em múltiplas condições,
// tornando seu código mais flexível e poderoso.
// Além disso, os operadores lógicos são frequentemente usados em expressões condicionais
// para determinar o fluxo de execução do programa, como em estruturas de controle de decisão (if
