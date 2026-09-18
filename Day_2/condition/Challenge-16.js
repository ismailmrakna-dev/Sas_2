console.log("Hello GitHub");
const prompt=require('prompt-sync')();
let a = parseInt(prompt("Entrer un nombre reel a =  "));
let b = parseInt(prompt("Entrer un nombre reel b =  "));
som= a+b;
if(a===b){
 som=som*3;
 console.log(`les deux valeurs sont identiques alors on va triple de leur somme. ${som}`);
}
else{
     console.log(`les deux valeurs ne sont pas identiques alors  leur somme. ${som}`);
}

