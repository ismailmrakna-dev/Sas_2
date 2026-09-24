const compChar=function (arr){
    let index=0
    let str1=""
    for (const str of arr){
        str1=""
        for (const comChar of str){
            str1=comChar + str1
        }
        arr[index] = str1
        index++
    }
    return arr
}
  

const fruits = ["pomme", "banane", "orange","fraise","kiwi","watermelon","pomma"]
console.log(compChar(fruits))
console.log(compChar(fruits))