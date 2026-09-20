const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
let text1=prompt("Tapez votre text 2 ici: ");
function Concatenation(str1,str2){
    let fus=`${str1} ${str2}`;
    return fus
}
console.log(Concatenation(text,text1));