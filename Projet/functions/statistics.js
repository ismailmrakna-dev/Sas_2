const prompt=require('prompt-sync')()

const {
    lengthArr,
}=require("../functions/candidat");

// Statistiques de l'Election
// Affichage du Nombre Total Des Candidats 
function nombreCandidat(candidats){
    let number=lengthArr(candidats)
    console.log("Nombre total Des Candidats Dans cette Elections: "+number+" Candidats")
}
// affichage du Nombre total des Votes Exprimes
function nombreVotes(candidats){
    let somVotes=0
    for (const candidat of candidats){
        somVotes += lengthArr(candidat.electeurs)
    }
    return somVotes
}


//trier a partir du nombre des Votes
function trierCandidats(candidats){
      for(i=0; i<lengthArr(candidats);i++){
      for(j=0; j<lengthArr(candidats)-1-i;j++){
            if(lengthArr(candidats[j].electeurs) < lengthArr(candidats[j+1].electeurs)){
            let temp = candidats[j]
            candidats[j]=candidats[j+1]
            candidats[j+1]=temp;
            }
        }
    }
}
// Affichage du Top 3 Candidats
function topCandidats(candidats){
    trierCandidats(candidats)
    console.log("")
    let index=3
    if(lengthArr(candidats)<=0){
        console.log(" Aucune Candidat Inscrist ")
    }
    else{
        for (const candidat of candidats){
            console.log(candidat)
            console.log("")
            index -= 1
            if(index <=0 ){
                break
            }
        }
    }
}
// Affichage des Candidats par parti politique
function partiPolitiqueCandidats(candidats){
    const politiqueArr=[]
    politiqueArr.push(candidats[0].partiPolitique)
    for (const candidat of candidats){
        let cond=true
        for (const str of politiqueArr){
           if(candidat.partiPolitique === str){
            cond=false
            break;
           }
        }
        if(cond){
            politiqueArr.push(candidat.partiPolitique)
        }
    }
    console.log("Voici les parti Politiques existent Dans cette Election ")
    console.log(politiqueArr)
    for (const politique of politiqueArr){
        let number=0
        console.log("")
        console.log("-----------------------------")
        console.log(politique)
        console.log("-----------------------------")
        for (const candidat of candidats){
            if(politique.toLowerCase()=== candidat.partiPolitique.toLowerCase()){
                console.log(candidat)
                console.log("")
                number++
            }
        }
        console.log("Nombre Candidats: "+ number)
        console.log("")
    }
}
// function to start statistics choice
function statistics(candidats){
    console.log("-------- Menu Des statistiques ---------")
            console.log(" ")
            console.log("1. Affichage du Nombre Total Des Candidats ")
            console.log("2. affichage du Nombre total des Votes Exprimes ")
            console.log("3. Affichage du Top 3 Candidats")
            console.log("4. Affichage des Candidats par parti politique")
            console.log("")
            let bonus=parseInt(prompt("Enter votre choix: "))
            switch(bonus){
                case 1 :
                    nombreCandidat(candidats) 
                    break;
                case 2 :
                    console.log("Votes Exprimes A l'Election: "+nombreVotes(candidats))
                    break;
                case 3 :
                    topCandidats(candidats)
                    break;
                case 4 :
                    partiPolitiqueCandidats(candidats)
                    break;
                default:  
                console.log("xx-- choix n'existe pas --xx")         
            }
}


// exports module
module.exports={
    nombreCandidat,
    nombreVotes,
    trierCandidats,
    topCandidats,
    partiPolitiqueCandidats,
    statistics 
};