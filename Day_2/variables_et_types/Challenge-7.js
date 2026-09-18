const prompt=require('prompt-sync')();
let a = Number(prompt("Entrer un nombre reel a =  "));
let b = Number(prompt("Entrer un nombre reel b =  "));
let c = Number(prompt("Entrer un nombre reel c =  "));
moy= (a + b + c)/3;
console.log(`la moyenne des trois nombres est : ${moy}`);