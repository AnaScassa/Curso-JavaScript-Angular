function calcular() {
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let op = document.getElementById('operacao').value;
    let resultado;

    switch(op) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            resultado = n1 / n2;
            break;
        default:
            resultado = 'Operação inválida';
    }
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  gorjeta();
});

function gorjeta() {
  let numero1 = parseFloat(document.getElementById('numero1').value);
  let numero2 = parseFloat(document.getElementById('numero2').value);
  let gorjeta = parseFloat(document.getElementById('gorjeta').value);

  let resultado2 = (((gorjeta * numero2) / 100) + numero2) / numero1;

  document.getElementById('resultado2').innerHTML =
    'Valor por pessoa: R$ ' + resultado2.toFixed(2);
}