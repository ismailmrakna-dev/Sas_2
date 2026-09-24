function searchString(arr, target){
    let cmp=0
    for (let str of arr){
        if(str.toLowerCase() === target.toLowerCase()){
            console.log("mot '"+ str +"' existe ")
            for (const char of str){
                cmp++
            }
            return cmp
        }
        
    }
    return -1
}
const fruits = ["pomme", "banane", "orange","fraise","kiwi"]
console.log(searchString(fruits,"orange"))