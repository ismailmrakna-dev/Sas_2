const nombres = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sommoy=0
for(i=0 ; i < nombres.length; i++){
    sommoy +=nombres[i];
}
let somMax=sommoy;
for(i=0 ; i < nombres.length; i++){
    if(nombres[i]>sommoy){
        let som=nombres[i]
        for(j=i+1;j<nombres.length;j++){
            if(som>nombres[j])
            som += nombres[j]
        }
        if(som > somMax){
            somMax=som
            indMax=j
        }
    }
}
console.log(somMax)