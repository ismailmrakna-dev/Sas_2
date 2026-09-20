const prompt=require("prompt-sync")();
let long=Number(prompt("Donnez moi le longueur de Rectangle "));
let base=Number(prompt("Donnez moi le base de Rectangle "));
let nom=prompt("Donnez moi le Nom (4 alphabets) ");
const Rectangle={}
Rectangle.nom=nom
Rectangle.longueur=long
Rectangle.base=base
console.log(Rectangle)
function Aires(rect){
    return rect.longueur*rect.base
}
console.log("La surface de "+ Rectangle.nom +" est ")
console.log(Aires(Rectangle))
