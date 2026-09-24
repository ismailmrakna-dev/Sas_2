const compChar=function (arr,char){
    let min=100
    let cmp=0
    let str1=""
    for (const str of arr){
   
        for (const comChar of str){
            if(char.toLowerCase() === comChar.toLowerCase()){
                cmp++;
            }
        
        }
    }
    return  char+" Retpeter Avec "+cmp+" fois"
}
  

const fruits = ["pomme", "banane", "orange","fraise","kiwi","watermelon","pomma"]
console.log(compChar(fruits,"o"))