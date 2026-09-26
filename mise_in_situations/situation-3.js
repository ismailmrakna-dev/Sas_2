const mots = ["chat", "chien", "banane", "bateau", "avion", "arbre", "chocolat"];

const obj={}

for (const mot of mots){
    let lettre = mot[0]
    const tab=[]
    for(const char of mots){
        if(  char[0] === lettre){
           tab.push(char)
        }
    }
    obj[lettre]=tab
   
}
console.log(obj)