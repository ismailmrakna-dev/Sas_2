const nombres = [3, 10, 2, 1, 20, 4, 5, 6, 1, 8, 9, 10, 11];
let som=0
let somMax=0
let indMax=0
let indMin=0
for(let i=0; i < nombres.length; i++){
    som=0
    if(nombres[i] < nombres[i+1]){
        som += nombres[i]+nombres[i+1]
        for(let j=i+1; j<nombres.length-1;j++){
            if(nombres[j] < nombres[j+1]){
                som += nombres[j+1]
                indMin=i
                indMax=j+1
            }
            else {break}
        }
    }
    
    if(som > somMax){
        somMax=som;
        i=indMax;
    }
}

console.log("somme: "+somMax)
for(i=indMin; i<=indMax; i++){
    console.log(nombres[i])
}
console.log("length: "+(indMax-indMin+1))