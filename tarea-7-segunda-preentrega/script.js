class Personaje {
    constructor( nombre, edad, poder){
        this.nombre = nombre; 
        this.edad = edad;
        this.poder = poder;
    }
}

const personajes = JSON.parse(localStorage.getItem('personajes')) ?? [];

const form = document.getElementById('form');
const mostrarP = document.getElementById('mostrarP');
const ocultarP = document.getElementById('ocultarB');
const cajaPersonajes = document.getElementById('cajaPersonajes')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dataF = new FormData(e.target);

    let personaje = new Personaje(dataF.get('nombre'), dataF.get('edad'), dataF.get('poder'));
    personajes.push(personaje);
    localStorage.setItem('personajes', JSON.stringify(personajes));
    console.log(personajes); 
    form.reset();
    
});

mostrarP.addEventListener('click', ()=>{
    let arrayPersonajes = JSON.parse(localStorage.getItem('personajes'));
    cajaPersonajes.innerHTML = '';
    arrayPersonajes.forEach((personaje, i) => {
        cajaPersonajes.innerHTML += `
        <div class="card border-primary mb-3 cajaPersonaje" id="personaje${i}"style="max-width: 20rem;">
            <div class="card-header">
            <h3>${personaje.nombre}</h3>
            <i class="fa-solid fa-trash-can eliminarPersonaje"></i>
            </div>
            <div class="card-body row">
                <h4 class="card-title">Edad: ${personaje.edad}</h4>
                <p class="card-text"></p>
            </div>
            <div class="card-body row">
                <h4 class="card-title">Poder: ${personaje.poder}</h4>
                <p class="card-text"></p>
            </div>
        </div>
        `
        
    });
    arrayPersonajes.forEach((personaje, i) => {
        document.getElementById(`personaje${i}`).firstElementChild.lastElementChild.addEventListener('click', ()=>{
            localStorage.setItem('personajes', JSON.stringify(personajes));
            document.getElementById(`personaje${i}`).remove();
            personajes.splice(i, 1);
        });
    })
});

