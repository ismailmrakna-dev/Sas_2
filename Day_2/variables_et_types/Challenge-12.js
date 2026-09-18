const prompt=require('prompt-sync')();
console.log("---- inverse d'un nombre entier ----");
let num = parseInt(prompt("Entrer un nombre entier du 4 chiffres: "));
n1=num%10;
n2=Math.floor(num/10) % 10;
n3=Math.floor(num/100) % 10;
n4=Math.floor(num/1000) % 10;

console.log(`inverse du ${num} est ${n1}${n2}${n3}${n4}`)

