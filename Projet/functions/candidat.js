const prompt=require('prompt-sync')()

const {
    searchCandidat  
}=require("../functions/electeurs");



//Modify a candidat After Cheeking 
function modifierCandidat(candidats,cin){
    let index = searchCandidat(candidats,cin)
    if(index !== -1){
        let choix=parseInt(prompt("Entrez Votre choix: "))
        switch(choix){
           case 1 : 
                let partiPolitique =prompt("Entez votre nouveau Partie Politique: ");
                if(partiPolitique==="" || partiPolitique===" " ||partiPolitique==="  ")
                    partiPolitique = "Independant"
                candidats[index].partiPolitique = partiPolitique
                console.log("Partie Politique modifie avec Succes")
                break
           case 2: 
                let age=0
                do{
                age = parseInt(prompt("Entez nouveau age: "))
                }while(age<=0 || age>120)
                candidats[index].age=age
                console.log("Age modifie avec Succes")
                break
           case 3: 
                let nom=prompt("Entez votre nouveau nom: ")
                candidats[index].nom=nom
                console.log("Nom modifie avec Succes")
                break 
           case 4: 
                let prenom=prompt("Entez votre nouveau nom: ")
                candidats[index].prenom=prenom
                console.log("Prenom modifie avec Succes")
                break
           default : console.log(" XX-- Please choisie votre choix a la liste --XX")          
        }
    }
    else console.log("Il n'y a pas Un candidat avec CIN:  " + cin)
}
// Appel of ModifierCandidat & Affiche Menu
function editCandidat(){
    console.log("----------  Menu Modifier Candidat  ----------")
    console.log("")
    console.log("1. Modifier le parti politique d'un candidat.")
    console.log("2. Modifier l'âge d'un candidat.")
    console.log("3. Modifier nom d'un candidat.")
    console.log("4. Modifier prenom d'un candidat.")
    console.log("")
    let cin =prompt(" Enter votre CIN: ")
    modifierCandidat(candidats,cin)
}

// Calcul length ARRAY
function lengthArr(arr){
    let cmp=0
    for (const ele of arr){
        cmp++
    }
    return cmp
}

// Supprimer un candidat d'apre votre CIN
function SupprimerCandidat(candidats, cin){
    let index=searchCandidat(candidats,cin)
    if(index !== -1){
        for (i=index ; i<lengthArr(candidats); i++){
            candidats[i]=candidats[i+1]
        }
        candidats.length -= 1
    }
    else console.log("Il n'y a pas Un candidat avec CIN:  " + cin)
}
// Recherche un candidat d'apres leur Nom
function rechercheCandidat(candidats){
    let nom=prompt("Nom du Candidat : ")
    for (const candidat of candidats){
        if(candidat.nom.toLowerCase() === nom.toLowerCase()){
            console.log(candidat)

            return 1
        }
    }
    return -1
}
module.exports={
    modifierCandidat,
    editCandidat,
    lengthArr,
    SupprimerCandidat,
    rechercheCandidat 
};