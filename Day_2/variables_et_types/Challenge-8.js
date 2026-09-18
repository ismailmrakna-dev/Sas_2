
const prompt=require('prompt-sync')();
let a = Number(prompt("Entrer un nombre reel a =  "));
let b = Number(prompt("Entrer un nombre reel b =  "));
let c = Number(prompt("Entrer un nombre reel c =  "));
moyGeo= (a + b + c) ** (1/3);
console.log(`la moyenne geometrique des trois nombres est : ${moyGeo}`);
