const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
let char=prompt("Tapez votre charactere ici: ");
function CompteChar(str1,chac){
    let cmp=0;
    let i=0;
    while(i < str1.length){
        if(str1[i] === chac){
        cmp++;}
        i++;
    }
     return cmp ; 
            
}
console.log(CompteChar(text,char));