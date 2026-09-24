
 function bubble_sort(nombre){
    let temp=0;
    for(let i=0; i< nombre.length; i++){
      for(j=0; j<nombre.length-i-1;j++)
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
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
const numbers2 = [0,17,5,-9,2,6,45,5,65,4,2,7,11]

console.log(bubble_sort(numbers));