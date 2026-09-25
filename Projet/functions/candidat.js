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
                break
           case 2: 
                let age=parseInt(prompt("Entez votre nouveau age: "))
                candidats[index].age=age
                break
           case 3: 
                let nom=prompt("Entez votre nouveau nom: ")
                candidats[index].nom=nom
                break 
        }
    }
    else console.log("Il n'y a pas Un candidat avec CIN:  " + cin)
}
function editCandidat(){
    console.log("----------  Menu Modifier Candidat  ----------")
    console.log("")
    console.log("1. Modifier le parti politique d'un candidat.")
    console.log("2. Modifier l'âge d'un candidat.")
    console.log("3. Modifier nom d'un candidat.")
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
        if(candidat.nom.toLowerCase() === nom.toLocaleLowerCase()){
            afficherCandidat(candidat)
            return 1}
    }
    return -1
}
export default{
    modifierCandidat,
    editCandidat,
    lengthArr,
    SupprimerCandidat,
    rechercheCandidat 
};