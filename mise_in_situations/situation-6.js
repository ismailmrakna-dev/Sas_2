const phrases = [
  "Le chat dort sur le canape",
  "Il fait beau aujourd'hui",
  "JavaScript est un langage de programmation puissant et flexible",
  "Bonjour",
  "Les etudiants apprennent la logique de programmation",
];
// 2 space one of the first one of the last
let somTot=2
let som=2
let somMax=0
let phrase=""
for (let mots of phrases){
  som=1
   for(let mot of mots){
    if(mot === " "){
      som +=1
      somTot +=1
    }
   }
   if(som>somMax){
    somMax=som
    phrase=mots
  }
    
}
console.log(phrase)
console.log(somMax)
console.log("moyenne")
console.log(somTot/phrases.length)

