const prompt=require('prompt-sync')();
let tempCelsuis = Number(prompt("Entrer la temperature en Celsuis(°C): "));
tempkelvin= tempCelsuis + 273.15;
console.log(`La temperature en Kelvin(K): ${tempkelvin}`);