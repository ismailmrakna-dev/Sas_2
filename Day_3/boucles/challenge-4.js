console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Factorielle d'un Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let comp = 0;
i=1
console.log(` ---- Affichage des ${num} Premiers Nombres Impairs ----`)
while(comp < num){

    if (i % 2 !== 0){
        console.log(`${i}`)
        comp++;
    }
    i++;
}

