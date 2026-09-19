console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Somme des N Nombre ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let som = 0;
for(i=1;i<=num;i++){
    console.log(`${num} x ${i} = ${i*num}`);
     som = som + i*num;
}
console.log(`la somme est egal ${som}`);