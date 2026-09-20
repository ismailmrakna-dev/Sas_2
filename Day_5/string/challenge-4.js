const prompt=require("prompt-sync")();
let text=prompt("Tapez votre text ici: ");
let text1=prompt("Tapez votre text 2 ici: ");
function Compare(str1,str2){
    if(str1.length === str2.length){
        let i=0;
        while(str1[i] === str2[i]){
            if(i===str1.length){
            return "chaines egales"
        }
           i++;

        }
        
            return "Chaines differents"
    }
    else return "Chaines differents"
}
console.log(Compare(text,text1));