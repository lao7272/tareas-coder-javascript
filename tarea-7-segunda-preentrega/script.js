class Personaje {
    constructor( nombre, poder, imagen){
        this.nombre = nombre; 
        this.imagen = imagen;
        this.poder = poder;
    }
}

const personajes = JSON.parse(localStorage.getItem('personajes')) ?? [];

const form = document.getElementById('form');
const mostrarP = document.getElementById('mostrarP');
const cajaPersonajes = document.getElementById('cajaPersonajes');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const dataF = new FormData(e.target);

    let personaje = new Personaje(dataF.get('nombre'),  dataF.get('poder'), dataF.get('imagen'),);
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
                <h4 class="card-title">Poder: ${personaje.poder}</h4>
                <img src="${personaje.imagen}" alt="imagen de ${personaje.nombre}">
            </div>
            
        </div>
        `
        
    });
    arrayPersonajes.forEach((personaje, i) => {
        document.getElementById(`personaje${i}`).firstElementChild.lastElementChild.addEventListener('click', ()=>{
            Toastify({
                        text: `${personaje.nombre} eliminado`,
                        duration: 1500,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(90deg, #242424, #989898)",
                            color: "#fff"
                        },
                        onClick: function(){} // Callback after click
                    }).showToast();
            localStorage.setItem('personajes', JSON.stringify(personajes));
            document.getElementById(`personaje${i}`).remove();
            personajes.splice(i, 1);
        });
    })
});

/* USO DE FETCH */
const mostrarOtrosPersonajes = document.getElementById('mostrarOtrosPersonajes');
const cajaFetchPersonajes = document.getElementById('cajaFetchPersonajes');

fetch("https://pokeapi.co/api/v2/pokemon/5")
.then(res => res.json())
.then(({name, abilities, sprites}) => {
    mostrarOtrosPersonajes.addEventListener('click', () => {
        cajaFetchPersonajes.innerHTML = `
        <div class="card border-primary mb-3 cajaPersonaje" id="personaje${name}"style="max-width: 20rem;">
        <div class="card-header">
        <h3>${name}</h3>
        <i class="fa-solid fa-trash-can eliminarPersonaje"></i>
        </div>
        <div class="card-body row">
            <h4 class="card-title">Poder: ${abilities[0].ability.name}</h4>
            <img src="${sprites.front_default}" alt="imagen de ${name}">
        </div>
        
    </div>
        `;
    });
});

