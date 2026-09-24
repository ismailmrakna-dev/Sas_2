function doubleNumber(arr){
    for(let j=0; j < arr.length ; j++){
        for(let i=j+1; i < arr.length ; i++){
           if(arr[j] === arr [i]){
              console.log(arr[i])
              return true
            }
        }
    }
    return false
}
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
const numbers2 = [0,17,-9,2,6,45,5,65,4,7,11]
console.log(doubleNumber(numbers2))