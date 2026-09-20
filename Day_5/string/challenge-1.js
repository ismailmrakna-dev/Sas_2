const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
function affiche(texte)
{console.log("vous avez tape le texte ' "+texte+" '");}
affiche(text);