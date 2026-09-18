console.log("Hello GitHub");
const prompt=require('prompt-sync')();
let lettre = prompt("Entrer une lettre: ");
let codeAscii=lettre.charCodeAt(0);
if(codeAscii >= 65 && codeAscii <= 90){
   console.log("L'alphabet entree est Majuscule");
}
else {
     console.log("L'alphabet entree n'est pas Majuscule");
}