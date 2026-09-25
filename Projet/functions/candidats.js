// Ajouter un nouveau Candidat
function ajouterCandidat(cinCand){
    const candidat= {}
    let nom=String(prompt("Entez votre Nom: "))
    let prenom=String(prompt("Entez votre Prenom: "))
    let partiPolitique=String(prompt("Entez votre Partie Politique: "))
    let age=0
    do{
    age = parseInt(prompt("Entez votre age: "))
    }while(age<=0 || age>120)
    if(partiPolitique==="" || partiPolitique===" " ||partiPolitique==="  ")
        partiPolitique = "Independant"
    candidat.cin=cinCand
    candidat.nom=nom
    candidat.prenom=prenom
    candidat.partiPolitique=partiPolitique
    candidat.age=age
    candidat.electeurs=[]
    return candidat 
}

// Affichage les Information d'un candidat
function afficherCandidat(candidat){
    console.log("CIN: "+ candidat.cin)
    console.log("Nom: "+candidat.nom)
    console.log("Prenom: "+candidat.prenom)
    console.log("Partie Politique: "+candidat.partiPolitique)
    console.log("Age: "+candidat.age)
    console.log("Electeurs: "+candidat.electeurs)
}
// Affichage tous candidats
function affichageCandidats(candidats){
    console.log("---------- Menu Affichage Candidats ---------")
    console.log("1. Trier les candidats par nombre de votes")
    console.log("2. Filtrer et afficher uniquement les candidats d'un parti politique spécifique.") 
    console.log(" ")

    let choix=parseInt(prompt("Entrez Votre choix: "))
        switch(choix){
           case 1 : 
                trierCandidats(candidats)
                let comp=0
                for (const candidat of candidats){
                    comp++
                    console.log(" ")
                    console.log("Candidat: #"+comp)
                    afficherCandidat(candidat)
                    console.log(" ")
                }
                break;
               
           case 2:
                let partPolitique=prompt("Enter la Partie Politique Des Candidats: ") 
                let cmp=0
                for (const candidat of candidats){
                    if(candidat.partiPolitique.toLowerCase() === partPolitique.toLowerCase()){
                        cmp++
                        console.log(" ")
                        console.log("Candidat: #"+cmp)
                        afficherCandidat(candidat)
                        console.log(" ")
                    }
                }
                break ;
            default : console.log("!!!  Please, Your Choice Should be in Menu !!! ")    
        }
}