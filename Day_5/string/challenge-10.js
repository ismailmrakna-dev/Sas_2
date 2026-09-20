const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
let str = prompt("Tapez votre string search ici: ");
function searchStr(str1,sStr){
    let str=""
    str =str1.replaceAll(sStr,"####") ;
    if(str !== str1){
        return "sous-string exist"
    }
    else return "no exist"
            
}
console.log(searchStr(text,str));