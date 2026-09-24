function inserNumber(arr,cible){
    let index=0
    for(let j=0; j < arr.length ; j++){
        for(let i=j; i < arr.length ; i++){
           if(arr[j] + arr[i] === cible){
              index++
              console.log("Paire " +index+ " ("+arr[j]+", "+arr[i] +")")
            }
        }
    }
    return ""
}
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
const numbers2 = [0,17,5,-9,2,6,45,5,65,4,2,7,11]
console.log(inserNumber(numbers,25))