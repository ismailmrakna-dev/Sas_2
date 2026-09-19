function Factoriel(a){
    if (a < 0){
        return -1; 
    }
   else if(a >= 1){
     let fact=1;
       for(let i=1 ; i<=a; i++){
        fact = fact*i;
       }
       return fact
   }
   else return 1
}
let res = Factoriel(4);
console.log(`4! : ${res}`);

