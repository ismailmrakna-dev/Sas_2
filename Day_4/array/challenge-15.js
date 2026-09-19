console.log("Hello");
const prompt=require('prompt-sync')();
const arr=[];
const arr2=[];
console.log("----- Saisie d'un Tableau 1 -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    arr.push(ele);
}while(comp<num);
console.log("----- Saisie d'un Tableau 2 -----");
let dim = parseInt(prompt('Donnez le numbre element: '));
let cmp=0;
do{
    cmp++;
    let el = parseInt(prompt(`Donnez element_${comp}: `));
    arr2.push(el);
}while(cmp<dim);
function fusion_tab(first,second){
    for(i=0; i<second.length; i++){
        first.push(second[i]);
    }
  return first;
}
console.log("Update SUCCESS "); 
console.log(fusion_tab(arr,arr2));
