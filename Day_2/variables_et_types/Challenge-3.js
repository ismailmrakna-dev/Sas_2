const prompt=require('prompt-sync')();
let kilometre = Number(prompt("Entrer la distanse en Kilometres(KM): "));
yards= kilometre * 1093.61;
console.log(" -------- la distance en kilomètres et la transforme en yards-------- ");
console.log(`la distanse en Kilometres(KM): ${kilometre}`);
console.log(`la distanse en Yards(KM): ${yards}`);
