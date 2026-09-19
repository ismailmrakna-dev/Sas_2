console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- La Moyenne des Nombres ----")
let som=0;
let comp=0;
let numbers="";
do
{
    let num = parseInt(prompt('Donnez un numbre entiere: '));
    if(num !==0 ){
    som += num;
    comp++;
    numbers=" + "+num;}

}while(num!==0);
console.log(" ------ la Somme Des Nombres Entres ------- ");
console.log(` ${numbers} = ${som}`);
console.log(`la moyenne est egal ${som/comp}`)