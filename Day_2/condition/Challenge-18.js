
const prompt=require('prompt-sync')();
let annee = parseInt(prompt("Entrer le nombre annee qui vous voulez de convertir: "));
console.log("--- Mois: m, Jours: j, Heures h, Minutes:n, Secondes:s ---");
let choix = prompt("Pour convertir une année¨, Entrer votre choix: ").toLowerCase();
switch (choix) {
    case 'm':let mois= annee*12;
        console.log(`${annee} annees est egale ${mois} mois`);
        break;
    case 'j':let jours= annee*365;
        console.log(`${annee} annees est egale ${jours} jours`);
        break;
    case 'h':let hours= annee*365*24;
        console.log(`${annee} annees est egale ${hours} houres`);
        break;
    case 'n':let min= annee*365*24*60;
        console.log(`${annee} annees est egale ${min} minutes`);
        break;
   case 's':let sec= annee*365*24*60*60;
        console.log(`${annee} annees est egale ${sec} secondes`);
        break;
    default:
        console.log(`La lettre "${choix}" n'est pas dans les choix proposer  .`);
}