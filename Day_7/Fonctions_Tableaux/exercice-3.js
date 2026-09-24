const minString=function (arr){
    let min=100
    let cmp=0
    let str1=""
    for (const str of arr){
        cmp=0
        for (const Char of str){
            cmp++;
        } 
        if(cmp <= min){
            str1 = str
            min = cmp
        }
    }
    return str1 +" Avec "+min+" lettres"
}
    

const fruits = ["pomme", "banane", "orange","fraise","kiwi","watermelon","pomma"]
console.log(minString(fruits))