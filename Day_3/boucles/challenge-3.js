console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Factorielle d'un Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let som = 0;
for(i=1;i<=num;i++){
     som = som + i;
}
console.log(`la somme est egal ${som}`)