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
console.log("----- La Somme des Elements Tableau -----");
console.log(nombre);
let som=0;
for(let i=0; i< nombre.length; i++){
    som += nombre[i];
}
console.log(" Somme = ");
console.log(som);