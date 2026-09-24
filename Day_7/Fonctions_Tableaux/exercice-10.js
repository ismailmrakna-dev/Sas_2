function mapNumber(arr, fact){
    let i=0
    for (let num of arr){
        arr[i]=num * fact
        i++
    }
    return arr
}
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
const numbers2 = [0,17,5,-9,2,6,45,5,65,4,2,7,11]
console.log(mapNumber(numbers,2))