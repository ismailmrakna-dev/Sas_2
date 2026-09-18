console.log("Hello GitHub");
const prompt=require('prompt-sync')();
console.log(" ----- Equation du Deuxième Degré (a*X^2 + b*X + c)  -------");
let a = Number(prompt("Entrer le coefficient a =  "));
let b = Number(prompt("Entrer le coefficient b =  "));
let c = Number(prompt("Entrer le coefficient c =  "));
delta=b*b -(4* a * c );
  console.log(`delta= ${delta}`);
if(delta < 0){
    console.log("il n'y a des solutions possibles de cette équation du deuxième degré dans IR.");

}
else if(delta > 0){
     console.log("lessolutions possibles de cette équation du deuxième degré dans IR.");
     sol1=(-b+ (delta)**(0.5))/(2*a);
     sol2=(-b-(delta)**(0.5))/(2*a);
     console.log(`x1= ${sol1}`);
     console.log(`x1= ${sol2}`);
}
else{
    console.log("la solution possible de cette équation du deuxième degré dans IR.");
     sol=(-b)/(2*a);
     console.log(`x= ${sol}`);
}