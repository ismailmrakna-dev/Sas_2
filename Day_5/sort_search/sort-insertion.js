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
console.log("---- Sort Insertion Croissant ----")
function sortInsertCroi (nombre) {
let chang = 0;
for(i=0;i<nombre.length; i++){

   if(nombre[i] >= nombre[i+1]) {
    chang=nombre[i+1]
    nombre[i+1]=nombre[i]
    nombre[i]=chang
   
    for(j=1;j<=i;j++){
        if(nombre[i-j] >= chang){
            nombre[(i+1-j)]=nombre[j]
        }
    }
}
}
return nombre
}
console.log(sortInsertCroi(arr))
