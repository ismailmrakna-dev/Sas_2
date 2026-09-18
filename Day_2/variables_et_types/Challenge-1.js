const prompt=require('prompt-sync')();
let nom = prompt("Entrer votre nom: ");
let prenom = prompt("Entrer votre prénom: ");
let age = prompt("Entrer votre âge: ");
let sexe = prompt("Entrer votre sexe (M/F): ");
let email = prompt("Entrer votre adresse e-mail: ");
console.log(" ------------ affiche-vos-informations ----------- ");
console.log("Bonjour")
console.log(`Full Name: ${nom} ${prenom}`);
console.log(`Age: ${age}`)
console.log(`Your sexe: ${sexe}`)
console.log(`address email: ${email}`)