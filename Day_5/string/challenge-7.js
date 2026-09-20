const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
function afficheMaj(texte)
{
    return texte.toUpperCase();

}
console.log(afficheMaj(text));