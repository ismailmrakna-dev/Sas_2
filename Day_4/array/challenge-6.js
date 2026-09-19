console.log("Hello");
const prompt=require('prompt-sync')();
const nombre=[];
console.log("----- Saisie d'un Tableau -----");
let fact = parseInt(prompt('Donnez le numbre element: '));
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    nombre.push(ele);
}while(comp<num);
console.log("----- Trouver le Maximum des Elements du Tableau -----");
console.log(nombre);

nombre.map((fact) => n*fact);
console.log(nombre)
for(let i=1; i< nombre.length; i++){
        nombre[i]=nombre[i]*fact;
} 
console.log(nombre);
