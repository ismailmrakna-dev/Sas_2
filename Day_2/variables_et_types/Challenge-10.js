const prompt=require('prompt-sync')();
const pi = 3.14;
let rayon = Number(prompt("Entrer le rayon du sphere en m: "));
let volume = (3/4) * pi * rayon**3;
console.log(`Le volume du sphere est egal ${volume} m3`);



