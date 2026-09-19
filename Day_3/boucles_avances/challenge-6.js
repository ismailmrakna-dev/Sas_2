console.log("Hello");
console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Facteurs Of Number ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));

console.log(` ---- Affiche les facteur de ${num} ----`);
let som = 0;
let fact=""
for(i=1; i<Math.floor(num/2); i++){
    if(num%i===0){
        fact +=", " + i;
        som += i;
    }
}
console.log(` ${fact} = ${som} `);