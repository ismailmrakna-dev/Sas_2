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

 function bubble_sort(nombre){
    let temp=0;
    for(let i=0; i< nombre.length; i++){
      for(j=0; j<nombre.length-1;j++)
        {
        if(nombre[j] < nombre[j+1]){
          temp = nombre[j]
          nombre[j]=nombre[j+1];
          nombre[j+1]=temp;
    }
}
}
return nombre;
 }
bubble_sort(arr);
console.log(arr);