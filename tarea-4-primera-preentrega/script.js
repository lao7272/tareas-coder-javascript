let mODC = prompt('Ingrese D.C si quiere ver personajes de D.C o Marvel si quiere ver personajes de Marvel').toLocaleLowerCase();

while(mODC === ''){
    mODC = prompt('Ingrese D.C si quiere ver personajes de D.C o Marvel si quiere ver personajes de Marvel').toLocaleLowerCase();
}
class Superheroes {
    constructor (id, edad, nombreHeroe, nombreReal, compania){
        this.id = id;
        this.edad = edad;
        this.nombreHeroe = nombreHeroe;
        this.nombreReal = nombreReal;
        this.compania = compania;
    }
    calcularNacimiento(){
        return 2022 - this.edad  
    }
}
const superheroe1 = new Superheroes(1, 35, 'batman', 'Bruce Wayne', 'd.c');
const superheroe2 = new Superheroes(2, 40, 'iron man', 'Tony Stark', 'marvel');
const superheroe3 = new Superheroes(3, 15, 'spider man', 'Peter Parker', 'marvel');
const superheroe4 = new Superheroes(4, 140, 'wolverine', 'Logan', 'marvel');
const superheroe5 = new Superheroes(5, 32, 'black widow', 'Natasha Romanoff', 'marvel');
const superheroe6 = new Superheroes(6, 45, 'superman', 'Clark Kent', 'd.c');
const superheroe7 = new Superheroes(7, 38 , 'antman', 'Scott Lang', 'marvel');
const superheroe8 = new Superheroes(8, 700 , 'mujer maravilla', 'Diana de Temiscira', 'd.c');
const superheroe9 = new Superheroes(9, 23 , 'flash', 'Barry allen', 'd.c');
const superheroe10 = new Superheroes(10, 28 , 'linterna verde', 'hal jordan', 'd.c');

let heroes = [superheroe1, superheroe2, superheroe3, superheroe4, superheroe5, superheroe6, superheroe7, superheroe8, superheroe9, superheroe10];


const companiaHeroe = heroes.filter((heroe)=> heroe.compania === mODC);
companiaHeroe.forEach((heroe)=> console.log(heroe = heroe.nombreHeroe));


