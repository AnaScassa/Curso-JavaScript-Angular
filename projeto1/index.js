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