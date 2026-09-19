console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Nombre Premier ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
let i=1;
let j=2;
console.log(` ---- Affichage des ${num}  Nombres Premiers ----`)
if(num<=2){
  console.log(1);
  console.log(2);
}
else{
  console.log(1);
  console.log(2);
for(i=3; i<=num ; i++){
  j=2;
  while(i%j !== 0){
    j++;
  }
  if(j===i){
    console.log(i);
  }
}}