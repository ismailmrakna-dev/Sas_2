function Compteur(n){
    
    let strNum=" ";
       for(let i=4 ; i>=0; i--){
         strNum +=i +" , " ;
        }
    return strNum
  
}

        
let res = Compteur(4);
console.log(`4! : ${res}`);

