console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Factorielle d'un Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let fact = 1;
for(i=num;i>=1;i--){
     fact = fact * i;
}
console.log(`${num}! = ${fact}`)