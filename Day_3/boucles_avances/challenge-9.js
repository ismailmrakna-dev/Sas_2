console.log("Hello :!");

const prompt=require('prompt-sync')();
console.log(" ---- Calcul de la Puissance ----")
do{
let num = parseInt(prompt('Donnez un numbre entiere positive: '));
let pow = parseInt(prompt('Donnez la puissance entiere positive: '));}while(nom<0 && pow<0);
console.log(` ---- Calcul de la Puissance de ${num}^${pow} ----`);
let pui = 1;
let i=0;
while(i<pow){
     pui=pui*num;
     i++;
}
console.log(` ${pui} `)
