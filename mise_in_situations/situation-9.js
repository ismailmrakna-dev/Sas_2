const mots = ["Radar", "bonjour", "Kayak", "elle", "test", "Laval", "ordinateur", "Ressasser"];
for(const mot of mots){
    let cond=true
    
    for(i=0;i<=Math.floor((mot.length+1)/2);i++){
        if(mot[i].toLowerCase() !== mot[mot.length-i-1].toLowerCase()){
            cond=false
            break
        }
    }
    if(cond)
        console.log(mot)
}