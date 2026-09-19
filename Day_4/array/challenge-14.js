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
function Moyenne_ele (arr){
    let som=0;
for(let i=0; i < arr.length; i++){
    
        som =som + arr[i]

} return som/(arr.length)
}
console.log("-----  Moyenne Éléments -----");
//let elem = parseInt(prompt('Donnez l element: '));
//let rep_el = parseInt(prompt('Donnez l element: '));
console.log("Update SUCCESS "); 
console.log(Moyenne_ele(arr));





