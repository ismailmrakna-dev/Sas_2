const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
function Len(string){
let comp=0
let i=0;
while(string[i] !== undefined){
    comp++;
    i++;
}
return comp;
}
console.log(Len(text));
