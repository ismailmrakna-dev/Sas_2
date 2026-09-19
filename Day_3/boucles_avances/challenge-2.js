console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Pyramides * ----")
let num = parseInt(prompt('Donnez un numbre entiere : '));
let i=1;
let star = "*";
let ligne="";
let j=0;
let space="";
console.log(` ---- Affichage de Pyramides * Nombres ----`)
while(i <= num){
    ligne="";
    space="";
    while(j <= Math.floor((2*num)/2)){
          space = space+" ";
          j++;
        }
    ligne = space + star;
    console.log(ligne);      
    star = star + "**";
    j=i;
    i++;
}
