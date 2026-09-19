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
function recherche_ele (arr,elem){
for(let i=0; i < arr.length; i++){
    if( elem === arr[i] ){
        return i+1
    }
        
} return -1
}
console.log("-----  Rechercher un Élément -----");
let elem = parseInt(prompt('Donnez l element: '));
 ind = recherche_ele(arr, elem)
console.log (ind);





