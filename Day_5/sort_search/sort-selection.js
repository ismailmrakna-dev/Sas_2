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
console.log(arr)
console.log("---- Sort Selection Croissant ----")
function sortSelectCroi (nombre) {
let index=0;
let temp=0;
for(let i=0; i< nombre.length; i++){
    let min=nombre[i];
    for(j=i; j<nombre.length;j++)
        {
        if(nombre[j] <= min){
          min = nombre[j];
          index = j;
    }}
  temp = nombre[i]
  nombre[i]=min;
  nombre[index]=temp;
}
return nombre }
console.log(sortSelectCroi (arr) );


console.log("---- Sort Selection Decroissant ----")
function sortSelectDec (nombre) {
let index=0;
let temp=0;
for(let i=0; i< nombre.length; i++){
    let max=  nombre[i];
    for(j=i; j<nombre.length;j++)
        {
        if(nombre[j] >= max){
          max = nombre[j];
          index = j;
    }}
  temp = nombre[i]
  nombre[i]=max;
  nombre[index]=temp;
}
return nombre }

console.log(sortSelectDec (arr) );