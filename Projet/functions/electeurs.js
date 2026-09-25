const prompt=require('prompt-sync')()

// pour un Electeur Voulez de voter sur un Candidat 
function voterCandidat(candidats){
    let cniElec= prompt("Entez votre CIN(Numero De Carte Nationnal): ")
    let check=verifieElecteur(candidats,cniElec)
    if(check){
        let cinCand=prompt("Entez CIN de candidat: ")
        let index= searchCandidat(candidats,cinCand)
        if(index !== -1){
            candidats[index].electeurs.push(cniElec)
            console.log("Vote enregistree avec Succes")
        }
        else console.log("Il n'y a pas Un candidat avec CIN:  " + cinCand)
    }
}
// Verifier Q'un Electeur deja vote 
function verifieElecteur(candidats,cniElec){
    for( const candidat of candidats){
        for (const electeur of candidat.electeurs){
            if (electeur === cniElec){
                console.log("Vous avez deja voter sur '"+candidat.nom+" | "+candidat.cni)
                console.log("Vous n'avez pas le droit de modifier votre vote ni voter a nouveau")
                return false
            }
        }
    }
    return true
}
// search un candidat D'apres Votre CIN avec Donnez leur indice in tableau des Candidats
function searchCandidat(candidats, cin_cand){
    let index=0
    for (const candidat of candidats){
        if(candidat.cin.toLowerCase() == cin_cand.toLowerCase()){
           return index 
        }
        index++
    }
    return -1
}

module.exports={
    voterCandidat,
    verifieElecteur,
    searchCandidat  
};