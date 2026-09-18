const prompt=require('prompt-sync')();
const annee= Number(prompt("entrez les nombre annee "));
console.log("mois 1 jours 2 hours 3 minutes 4 ")
const choix=prompt("entez votre choix");
switch(choix)
{
    case '1': let mois = annee* 12;
    console.log(`le nombre annee ${annee} est egal ${mois}`);
    break;
     case '2': let jours = annee* 365;
    console.log(`le nombre annee ${annee} est egal ${jours}`);
    break;
     case '3': let hour = annee* 365*24;
    console.log(`le nombre annee ${annee} est egal ${hour}`);
    break;
     case '4': let min = annee* 365 *24 *60;
    console.log(`le nombre annee ${annee} est egal ${min}`);
    break;
    default: console.log("erreurx")
}