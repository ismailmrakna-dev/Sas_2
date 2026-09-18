console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ----  la Suite de Fibonacci ----")
let n = parseInt(prompt('Donnez un numbre entiere: '));
let som = 1;
let temp=0;
if(n <= 0){
   som=0;
}
  if(n === 1){
  som=1;
}
else for(i=2; i <= n; i++){

    let ind = temp;
    temp = som;
    som = temp + ind;
   
}
console.log(`F(${n}) = ${som}`);