function searchNumber(arr, target){
    for (let num of arr)
        if(num === target)
            return true
    return false
}
const numbers = [0,17,15,-9,12,96,45,25,65,74,12,78,11]
console.log(searchNumber(numbers,25))