console.log("Olá, mundo!");

// var caiu em desuso, mas ainda é possível usar
let firstname = "Ana";
let lastname = "Silva";
console.log("Olá, " + firstname + " " + lastname + "!"); 

// usando const para valores que não mudam
const age = 28;
console.log("Idade: " + age);

// js é dinamico pq ele permite mudar o tipo da variável
let dynamicVar = "I am a string";
console.log(dynamicVar);
dynamicVar = 42;
console.log(dynamicVar);

// objetos em js
let pen = {
    itemName: "Pen",
    itemPrice: 3,
    itemAvailable: true,
    itemColor: "blue"
}
console.log(pen);
pen.itemPrice = 4; 
console.log(pen.itemPrice);

// arrays em js
let friends = ["João", "Maria", "Pedro"]; // lista de items
console.log(friends);
// lembrar que tem arrays sempre começa no índice 0
console.log(friends[0]);

// funções em js
function saleStatus(status, total){ // passando parametro para a função
    console.log("Transaction " + status + " for total of $" + total);
}
let statusOf = "Approved";
let total = 100;
saleStatus(statusOf, total); // chamando a função

function percentage10(price){
    return price - (price * 10 / 100);
}

console.log(percentage10(20));

// atribuição
let x = 10;
x += 5; // x = x + 5
console.log(x);

// comparação
let a = '1';
let b = 1;
// em js são 4 tipos de comparação: ==, ===, !=, !==
// == compara apenas o valor, === compara o valor e o tipo
console.log(a === b); // strict (valor e tipo)
console.log(a == b); // loose (apenas valor, faz coerção de tipo)

// operador ternário
let age2 = 18;
let canVote = (age2 >= 18) ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote);

// for in loop
const myCar = {
    model: "Toyota",
    year: 2020,
    color: "red"
};
for (let i in myCar) { 
// i vai receber as variaveis do objeto myCar, ou seja, model, year e color
    console.log(i + ": " + myCar[i]);
} 

// for of loop
const myArray = ["apple", "banana", "cherry"];
for (let fruit of myArray) { 
// fruit vai receber os valores do array, ou seja, apple, banana e cherry
    console.log(fruit);
}

// pegando elemento do HTML e atualizando seu conteúdo
// innerHTML é uma propriedade que permite acessar ou modificar o conteúdo HTML de um elemento
document.getElementById("output").innerHTML = "texto atualizado pelo JavaScript!";