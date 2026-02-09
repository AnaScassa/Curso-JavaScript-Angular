// Function Declaration
function movie(){
    console.log("Vingadores: Ultimato");
}
movie(); // Chama a função 'movie' para exibir o nome do filme

// Function Expression
const car = function(){
    console.log("Fusca");
}
car(); // Chama a função 'car' para exibir o nome do carro

// Arrow Function
const bike = () => {
    console.log("Caloi");
}
bike(); // Chama a função 'bike' para exibir o nome da bicicleta

// Function with parameters
function sum(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        // os argumentos passados para a função são acessíveis através do objeto
        // 'arguments', que é um array-like contendo os valores dos argumentos
        total += arguments[i];
    }
    return total;
}
console.log(sum(5, 10, 20, 30)); 
// Chama a função 'sum' com os argumentos 5 e 10, e exibe o resultado da soma

// Function inicializada com valores default
function carLoan(loan, rate = 2.9, year = 5){
    return(loan * (1 + rate/100) ** year).toFixed(2);
}
console.log(carLoan(20000)); 
// Chama a função 'carLoan' com o valor do empréstimo e exibe o resultado do cálculo
//  do empréstimo com os valores default para taxa e anos