const mots = ["prefixation", "prefixer", "prefixe", "prefixctural"];
let prefi =""
let mot=mots[0]
for(i=0; i <mot.length; i++){
    let j=1
    if(mot[i]===mots[j][i]){
        j++
    }
    if(mot[i]===mots[j][i]){
        j++
    }
    if(mot[i]===mots[j][i]){
        prefi += mot[i]
    }
    else break
}
console.log("prefixe: "+prefi)