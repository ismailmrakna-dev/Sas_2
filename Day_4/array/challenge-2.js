
const prompt=require('prompt-sync')();
const nombre=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    nombre.push(ele)
}while(comp<num);
console.log("----- Affichage du Tableau -----");
console.log(nombre);
for(let i=0; i< nombre.length; i++){
    console.log(nombre[i]);
}