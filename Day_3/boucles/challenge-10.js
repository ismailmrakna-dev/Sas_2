const prompt=require('prompt-sync')();
console.log(" ----   Compteur de Chiffres ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
comp = 0;

console.log(` ---- Nombre de chiffres de ${num}  ----`)
while(num > 0){
    
    n1=num%10;
    num=Math.floor(num/10);
    comp++

}
console.log(`${comp}`);