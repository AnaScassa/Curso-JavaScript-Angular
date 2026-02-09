let nuum = [25, 30, 22, 28, 35]; 

nuum.push(40); // Adiciona o número 40 ao final do array
nuum.unshift(20); // Adiciona o número 20 ao início do array
nuum.splice(2, 0, 27); // Adiciona o número 27 na posição 2 (índice 2)

console.log(nuum); // Exibe o array atualizado

const movies = [
    {id:1, movieName: "Vingadores: Ultimato"},
    {id:2, movieName: "O Rei Leão"},
    {id:3, movieName: "Homem-Aranha: Longe de Casa"},
    {id:4, movieName: "Toy Story 4"},
    {id:5, movieName: "Frozen II"},
    {id:6, movieName: "Star Wars: A Ascensão Skywalker"}
]
console.log(movies);
console.log(movies.find(function(movie) {
    return movie.movieName == "O Rei Leão";
})); // Encontra o filme "O Rei Leão" e exibe o objeto correspondente

const final = movies.pop(); 
// Remove o último elemento do array e o armazena na variável 'final'
console.log(final); 
const final2 = movies.shift(); 
// Remove o primeiro elemento do array e o armazena na variável 'final2'
console.log(final2);

const final3 = movies.splice(3, 1); 
// Remove o elemento na posição 3 (índice 3) e o armazena na variável 'final3'
console.log(final3);

// nuum = [] => esvaziando a array
// nuum.length = 0 => esvaziando a array
nuum.splice(0, nuum.length); // Esvazia o array 'nuum' usando splice

let num2 = [10, 20, 30, 40, 50];
let letters = ['a', 'b', 'c', 'd', 'e'];

let all = num2.concat(letters); // Combina os arrays 'num2' e 'letters' em um novo array
let half = all.slice(3, 5); 

console.log(all); 
console.log(half); 

let clients = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
console.log(clients);

let clientsJoin = clients.join(', '); 
// Junta os elementos do array 'clients' em uma string, separando-os por vírgula e espaço
console.log(clientsJoin); 

clients.sort(); // Ordena os elementos do array 'clients' em ordem alfabética
console.log(clients);

clients.reverse(); // Inverte a ordem dos elementos do array 'clients'
console.log(clients);

const tempLondon = [18, 12, 8, 20, 25];
// a função every() verifica todos os elementos do array
const tempPositive = tempLondon.every(function(value) {
    return value >= 0;
});
console.log(tempPositive);

// a função filter() cria um novo array com todos os elementos que passam no teste 
// implementado pela função fornecida
const tempPositive2 = tempLondon.filter(value => value >= 0); 

console.log(tempPositive2);