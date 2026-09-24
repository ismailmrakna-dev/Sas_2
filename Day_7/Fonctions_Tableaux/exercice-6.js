const doubleString =function (arr,arr1){
    let index=0
    const arrResult=[]
    for (const str of arr){
        for (const comStr of arr1){
            if(str.toLowerCase() === comStr.toLowerCase()){
                arrResult[index]=str
                index++
            }
        }
    }
    return arrResult
}
  

const fruits = ["pomme", "banane", "orange","fraise","kiwi","watermelon","peach","pomma"]
const fruits2 = ["pomme", "peach", "lemon","fraise","kiwi","water"]
console.log(doubleString(fruits,fruits2))
