const prompt=require("prompt-sync")();
str=String(prompt("sstr: "))
console.log(typeof(str))
function unLettreStr(str){
    for (let char of str){
        char = char.toUpperCase()
        if (char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90 )
            return true
    }
    return false
}
console.log(unLettreStr(str))