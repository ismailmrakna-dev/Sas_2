const nombres = [5, 3, 8, 2, 7, 6, 9, 4];
let som=0
for(i=0;i<nombres.length;i++){
    som=0;
    for(j=i;j<i+3;j++){
        som += nombres[j]
    }
    if(som % 2 === 0){
        console.log("Somme:")
        console.log(som)
        console.log("numbers")
        console.log(nombres.slice(i,i+3))
        break
    }
}