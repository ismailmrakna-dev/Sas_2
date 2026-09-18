const prompt=require('prompt-sync')();
let a = Number(prompt("Entrer un nombre reel a =  "));
let b = Number(prompt("Entrer un nombre reel b =  "));
console.log(" -------- Resultats -------- ");
som = a + b;
minus = a - b;
multi = a * b;
div = a / b
console.log(`la somme est : ${som}`);
console.log(`la difference est : ${minus}`);
console.log(`a fois b est : ${multi}`);
console.log(`a divisee par b est : ${div}`);

