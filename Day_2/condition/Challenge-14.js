const prompt=require('prompt-sync')();
let a = parseInt(prompt("Entrer un nombre entier:  "));
console.log(` Le nombre ${a} est un `);
if(a % 2 === 0){
    console.log("Nombre pair");
}
else {
    console.log("Nombre impair");
}