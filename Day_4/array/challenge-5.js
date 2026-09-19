console.log("Hello");
const prompt=require('prompt-sync')();
const nombre=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    nombre.push(ele);
}while(comp<num);
console.log("----- Trouver le Minimum des Elements du Tableau -----");
console.log(nombre);
let min=nombre[0];
for(let i=1; i< nombre.length; i++){
    if(nombre[i] < min){
        min=nombre[i];
    }
} 
console.log(" Le Minimum = ");
console.log(min);