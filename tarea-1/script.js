let numeroPrimo = parseFloat(prompt('Ingrese un numero'));

let siEsPrimo = true;

while(numeroPrimo < 0 || isNaN(numeroPrimo)){
    numeroPrimo = parseFloat(prompt('Ingrese un numero'));
}

for (let i = 2; i <= numeroPrimo/2; i++) {
    if (numeroPrimo % i === 0){
        siEsPrimo = false;
    }
}

if(siEsPrimo){
    console.log('Es un numero primo');
} else {
    console.log('No es un numero primo')
}

l