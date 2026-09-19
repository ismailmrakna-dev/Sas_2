 
 const prompt=require('prompt-sync')();
const origTab=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    origTab.push(ele);
}while(comp<num);

console.log("----- Inverfse d'un Tableau -----");

const verTab=[];
 for(i=0; i< num; i++){
    verTab.push(origTab.pop());
}

console.log("Inverse Tableau");
console.log(verTab);
