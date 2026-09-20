const prompt=require("prompt-sync")();
let title = prompt("Donnez moi Title de livre ");
let auteur = prompt("Donnez moi le L'auteur ");
let annee = Number(prompt("Donnez moi Annee du publication "));
const Livre={}
Livre.title=title
Livre.annee=annee
Livre.auteur=auteur
function DefObject(title, annee, auteur ){
    const livre={}
    livre.title=title
    livre.annee=annee
    livre.auteur=auteur
    return livre

}
console.log(Livre.title+" ( "+Livre.annee+", ' "+Livre.auteur+" ')" )
const livre1=DefObject("The Diary of CEO", 2012 ,"James Walter");
console.log (livre1)