const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");

function Iversion(str){
    let invS="";
    for(i=str.length-1;i>=0; i--){
        invS += str[i];
    }
    return invS 
}
console.log(Iversion(text));