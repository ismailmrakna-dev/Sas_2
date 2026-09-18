const prompt=require('prompt-sync')();
let tempCelsuis = Number(prompt("Entrer la temperature en Celsuis(°C): "));
console.log(" -------- L'Etat de l'Eau -------- ");

if(tempCelsuis < 0){
    console.log("Eau est à l'etat Solide");
}
else if (tempCelsuis < 100){
    console.log("Eau est à l'etat Liquide");
}

else {
    console.log("Eau est à l'etat Gaz");
}