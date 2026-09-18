console.log("Hello");
console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Calcul de la Puissance ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let pow = parseInt(prompt('Donnez la puissance entiere: '));
console.log(` ---- Calcul de la Puissance de ${num}^${pow} ----`);
let pui = 1;
for(i=0; i<pow; i++){
     pui=pui*num;
}
console.log(` ${pui} `)
