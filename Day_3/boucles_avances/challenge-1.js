const prompt=require('prompt-sync')();
console.log(" ---- Table de Multiplication ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
console.log(` ---- Table de Multiplication de ${num} ----`)
for(i=10;i>=1;i--){
    console.log(` ${num} x ${i} ${num*i}  `);
}