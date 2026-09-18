const prompt=require('prompt-sync')();
let vitesseKmH = Number(prompt("Entrer la vitesse en kilomètres par heure Km/h: "));
vitesseMS= vitesseKmH * 0.27778;
console.log(" -------- la vitesse en (km/h) et la transforme en (m/s)-------- ");
console.log(`la vitesse en Kilometres(KM): ${vitesseKmH}`);
console.log(`la vitesse en mètres par seconde (m/s): ${vitesseMS}`);