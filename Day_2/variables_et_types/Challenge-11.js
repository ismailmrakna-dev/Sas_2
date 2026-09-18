const prompt=require('prompt-sync')();
console.log("---- La surface de Rectangle ----");
let longueur = Number(prompt("Entrer le longueur: "));
let largeur= Number(prompt("Entrer le largeur: "));
surf = largeur * longueur ;
console.log(`La surface de Rectangle est egal ${surf}`);