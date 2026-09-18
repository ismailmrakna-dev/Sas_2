console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Factorielle d'un Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));

i=0;
let star = "*";
let space= "                     ";
console.log(` ---- Affichage des ${num} Premiers Nombres Impairs ----`)
while(i < num){
    space = space -" ";
    if (i % 2 !== 0){
        for (let j=comp; j<i; j++ )
        star = space+"**"+space;
    }
    comp=i;
    i++;
    
    console.log(star);
}