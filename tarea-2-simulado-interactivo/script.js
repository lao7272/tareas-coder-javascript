let numero = parseFloat(prompt('Ingrese su peso en kilos para convertilo a libras'));

while (isNaN(numero) || numero < 0){
    parseFloat(prompt('Ingrese su peso en kilos para convertilo a libras'));
}
function conversorALibras(num){
    let libra = 2.20462;    
    let cuenta = libra * num;
    return cuenta
}
let resultado = conversorALibras(numero);

alert('Su peso en kilos es ' + resultado);