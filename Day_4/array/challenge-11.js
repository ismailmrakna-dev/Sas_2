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
function replace_ele (arr,elemm,mod){
for(let i=0; i < arr.length; i++){
    if( elem === arr[i] ){
        arr[i]=mod;
        return 
    }
        
} return -1
}
console.log("-----  Replace un Élément -----");
let elem = parseInt(prompt('Donnez l element: '));
let rep_el = parseInt(prompt('Donnez l element: '));
 ind = replace_ele(arr, elem,rep_el);
console.log("Élément Replaced SUCCESS "); 
console.log (arr);





