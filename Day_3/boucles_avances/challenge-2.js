console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Factorielle d'un Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));

let i=1;

console.log(` ---- Affichage des ${num}  Nombres Premiers ----`)
while(i <= num){
      
        for (let j=2; j < parseInt(i); j++ ){
          if(i%j === 0){
            break;
          } console.log(i); 
        }
        
     i++;
    
}