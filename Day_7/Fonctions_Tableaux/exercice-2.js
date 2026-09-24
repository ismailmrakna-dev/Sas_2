const searchChar=function (arr, char){
    for (const str of arr){
        for (const firstChar of str){
            if(firstChar.toLowerCase() === char.toLowerCase()){
                console.log(str)
            }
            break;
        } 
    }
    return ""
}
    

const fruits = ["pomme", "banane", "orange","fraise","kiwi","watermelon","pomma"]
console.log(searchChar(fruits,"p"))