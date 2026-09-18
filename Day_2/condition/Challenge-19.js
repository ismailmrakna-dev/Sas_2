console.log("Hello GitHub");
const prompt=require('prompt-sync')();
let a = Number(prompt("Entrer le nombre a =  "));
if( a < 0 ){
    console.log(` ${a} est negatif`);
}
else if( a > 0 ){
    console.log(` ${a} est positif`);

}
else{
    console.log(` ${a} est nul`);
}