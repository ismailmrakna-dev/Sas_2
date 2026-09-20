const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");

function supSpace(str1){
    let str=""
    str =str1.replaceAll(" ","") ;
    return str
            
}
console.log(supSpace(text));