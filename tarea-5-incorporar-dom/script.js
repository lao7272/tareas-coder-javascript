class User {
    constructor(nombre, email, numero){
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;
    }
}

let nombre = prompt('Ingrese su nombre');
let email = prompt('Ingrese su correo electronico');
let numero = parseFloat(prompt('Ingrese su numero de telefono'));

while(nombre === null || nombre === ''){
    nombre = prompt('Ingrese su nombre');
}
while(email === null || email === ''){
    email = prompt('Ingrese su correo electronico');
}
while(isNaN(numero)){
    numero = parseFloat(prompt('Ingrese su numero de telefono'));
}


const user1 = new User(nombre, email, numero);
const cartaContainer = document.getElementById('containerCartas');
cartaContainer.innerHTML += `
    <div class="carta">
        <h2>Hola ${user1.nombre}</h2>
        <div class="cartaInfo">
            <h3>Tus datos</h3>
            <p> <b>Nombre: </b></p><span>${user1.nombre} </span>
            <p> <b>Correo electronico: </b></p><span>${user1.email} </span>
            <p> <b>Numero de telefono: </b></p><span>${user1.numero} </span>
        </div>
    </div>
`
console.log(user1);

