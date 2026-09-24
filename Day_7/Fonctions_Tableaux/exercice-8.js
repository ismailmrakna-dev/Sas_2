function inserNumber(arr, arr1){
    let index=0
    const arrResult=[]
    for (let num of arr){
        for(let num2 of arr1){
           if(num === num2){
              arrResult[index]=num
              index++
            }
        }
    }
    return arrResult
}
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
const numbers2 = [0,17,5,-9,2,6,45,5,65,4,2,7,11]
console.log(inserNumber(numbers,numbers2))