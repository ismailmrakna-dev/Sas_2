const prompt=require('prompt-sync')();
console.log(" ----  Inversion d'un Entier ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
numver = 0;

console.log(` ---- Inversion du ${num}  ----`)
while(num > 0){
    
    n1=num%10;
    num=Math.floor(num/10);
    numver = numver*10+n1;

}
console.log(`${numver}`);