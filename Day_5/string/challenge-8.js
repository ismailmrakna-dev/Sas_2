const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
function afficheMin(texte)
{
    return texte.toLowerCase();

}
console.log(afficheMin(text));