class User{
    constructor(nombre, email, numero, contraseña){
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;
        this.contraseña = contraseña;
    }
}



const formId = document.getElementById('formId');
const mostrarUser = document.getElementById('mostrarUser');
const ocultarUser =document.getElementById('ocultarUser');
const divUser = document.getElementById('divUser');

const users = [];

formId.addEventListener('submit', (event) => {
    event.preventDefault();

    let nombre = document.getElementById('exampleInputName1').value;
    let email = document.getElementById('exampleInputEmail1').value;
    let numero = document.getElementById('exampleInputNumber1').value;
    let contraseña = document.getElementById('exampleInputPassword1').value;

    const user = new User(nombre, email, numero, contraseña);
    users.push(user);
    formId.reset();
}); 

mostrarUser.addEventListener('click', () => {
    if(document.getElementById('carta') === null){
        divUser.innerHTML += `
        <div id="carta" class="carta">
            <h2>Hola ${users[0].nombre}</h2>
            <div class="cartaInfo">
                <h3>Tus datos</h3>
                <p> <b>Nombre: </b></p><span>${users[0].nombre} </span>
                <p> <b>Correo electronico: </b></p><span>${users[0].email} </span>
                <p> <b>Numero de telefono: </b></p><span>${users[0].numero} </span>
                <p> <b>Contraseña: </b></p><span>${users[0].contraseña} </span>
            </div>
        </div>
        `
    }
    divUser.style.display = 'block';
    mostrarUser.style.display = 'none';
    ocultarUser.style.display = 'block';
});

ocultarUser.addEventListener('click', () => {
    divUser.style.display = 'none';
    mostrarUser.style.display = 'block';
    ocultarUser.style.display = 'none';
});

