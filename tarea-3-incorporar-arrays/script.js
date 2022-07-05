let pregunta = prompt('Ingrese el nombre de un superheroe y revelaremos su edad y su verdadera identidad').toLocaleLowerCase();

while(pregunta === ''){
    pregunta = prompt('Ingrese el nombre de un superheroe y revelaremos su edad y su verdadera identidad').toLocaleLowerCase();
}
class Superheroes {
    constructor (edad, nombreHeroe, nombreReal){
        this.edad = edad;
        this.nombreHeroe = nombreHeroe;
        this.nombreReal = nombreReal;
    }
    calcularNacimiento(){
        return 2022 - this.edad  
    }
}
const superheroe1 = new Superheroes(35, 'batman', 'Bruce Wayne');
const superheroe2 = new Superheroes(40 , 'iron man', 'Tony Stark');
const superheroe3 = new Superheroes(15 , 'spider man', 'Peter Parker');
const superheroe4 = new Superheroes(140 , 'wolverine', 'Logan');
const superheroe5 = new Superheroes(32 , 'black widow', 'Natasha Romanoff');
const superheroe6 = new Superheroes(45, 'superman', 'Clark Kent');

let heroes = [superheroe1, superheroe2, superheroe3, superheroe4, superheroe5, superheroe6];

for (let i = 0; i < heroes.length; i++) {
    if(heroes[i].nombreHeroe === pregunta){
        console.log(`La verdadera identidad de ${heroes[i].nombreHeroe} es ${heroes[i].nombreReal} y su edad es ${heroes[i].edad} años. Nacio en el año ${heroes[i].calcularNacimiento()}`);
    }
}


