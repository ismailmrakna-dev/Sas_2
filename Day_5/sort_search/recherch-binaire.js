console.log("Hello");
const prompt=require('prompt-sync')();
const arr=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = Number(prompt(`Donnez element_${comp}: `));
    arr.push(ele);
}while(comp<num);
function rechercheBinary (arr,elem){
let min = 0
let max = arr.length + 1    
let med = parseInt((arr.length+1)/2 )   
while (min !== max) {
    med=parseInt ((max+min)/2)
    if(arr[med]===elem){
        return med}
    else{    
        if(arr[med] > elem ){
            max = med;

        }
        else min=med
    }
}
return -1
}

console.log("-----  Rechercher un Élément -----");
let elem = parseInt(prompt('Donnez l element: '));
 ind = rechercheBinary(arr, elem)
console.log (ind);





