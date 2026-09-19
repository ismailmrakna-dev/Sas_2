const Factoriel = function (a){
    if (a< 0){
        return -1; 
}
   else if(a>0){
    let fact=1;
       for(let i=0 ; i<=a; i++){
        fact = fact *i;
       }
       return fact
   }
   else return 1
}
