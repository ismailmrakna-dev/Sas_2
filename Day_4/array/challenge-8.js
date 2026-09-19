 
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
console.log("----- Copie d'un Tableau -----");
const copTab=[];
 for(i=0; i< origTab.length; i++){
    copTab.push(origTab[i]);
}
console.log("Copie Tableau");
console.log(copTab);
console.log("Origine Tableau");
console.log(origTab);
