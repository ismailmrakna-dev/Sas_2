console.log("Hello");
const prompt=require('prompt-sync')();
const arr=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    arr.push(ele);
}while(comp<num);
function Paire_ele (arr){
    const pair=[];
for(let i=0; i < arr.length; i++){
    if(  arr[i] %2 ===0){
        pair.push(arr[i])
        
    }
        
} return pair
}
console.log("-----  Pairs Éléments -----");
//let elem = parseInt(prompt('Donnez l element: '));
//let rep_el = parseInt(prompt('Donnez l element: '));
console.log("Update SUCCESS "); 
console.log(Paire_ele(arr));





