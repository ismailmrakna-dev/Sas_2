console.log("Hello");
const prompt=require('prompt-sync')();
const nombre=[];
console.log("----- Saisie d'un Tableau -----");
let num = parseInt(prompt('Donnez le numbre element: '));
let comp=0;
do{
    comp++;
    let ele = parseInt(prompt(`Donnez element_${comp}: `));
    nombre.push(ele);
}while(comp<num);
let index=0;
let temp=0;
for(let i=0; i< nombre.length; i++){
    let min=nombre[i];
    for(j=i; j<nombre.length;j++)
        {
        if(nombre[j] < min){
          min = nombre[j];
          index = j;
    }}
  temp = nombre[i]
  nombre[i]=min;
  nombre[index]=temp;
} 
console.log(nombre);