const prompt=require('prompt-sync')()
let arret = true;
const candidats=[]
do{ 
    console.log("=================================================")
    console.log("---------    Gestion des Élections    -----------")
    console.log("------    Listes Électorales au Maroc    ------- ")
    console.log("=================================================")
    console.log("  1. Ajouter un nouveau candidat ")
    console.log("  2. Ajouter plusieurs candidats à la fois.  ")
    console.log("  3. Afficher la liste des candidats  ")
    console.log("  4. Voter pour un candidat ")
    console.log("  5. Modifier les informations d'un candidat ")
    console.log("  6. Supprimer un candidat ")
    console.log("  7. Rechercher des candidats ")
    console.log("  8. Statistiques de l'élection  ")
    console.log("  0. Quitter ")
    console.log("                                              ")


    let choix = parseInt(prompt(" Votre Choix: "))
    switch(choix) {
        case 0:
           arret=false; break;

        case 1:{
           candidats.push(ajouterCandidat())
            break;
        }

        case 2:{
            let num_cand=parseInt(prompt("Enter numbre Of candidat vous voulez d'ajouter: "))
            for(let i=0;i<num_cand;i++){
               console.log ("Candidat: #" +(num_cand-i)) 
               let cinCand = String(prompt("Entez votre CIN(Numero De Carte Nationnal): "))
               if(searchCandidat(candidats,cinCand) === -1){
                  candidats.push(ajouterCandidat(cinCand))
               }
               else console.log("Candidat CIN: "+ cinCand +" Deja Existe dans Candidats")
                
            }
            break;
        }

        case 3:
            {  
                affichageCandidats(candidats)
              
            break;}
     
        case 4: {
                voterCandidat(candidats)
                break;}
        
        case 5:{
                console.log("----------  Menu Modifier Candidat  ----------")
                console.log("")
                console.log("1. Modifier le parti politique d'un candidat.")
                console.log("2. Modifier l'âge d'un candidat.")
                console.log("3. Modifier nom d'un candidat.")
                console.log("")
                let cin =prompt(" Enter votre CIN: ")
                modifierCandidat(candidats,cin)
                break;}
        case 6:{
                let cin =prompt(" Enter votre CIN: ")
                SupprimerCandidat(candidats, cin)
                break;}  

        case 7:{ 
            let index=rechercheCandidat(candidats)
            if (index === -1)
                console.log("xx- il n'ya pas un candidat avec ce Nom -xx")
            

  
            break;} 
             
        case 8:{
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
            break;  }         
        default : console.log("!!!  Please, Your Choice Should be in Menu !!! ")
    }   

}while(arret);
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
// pour un Electeur Voulez de voter sur un Candidat 
function voterCandidat(candidats){
    let cniElec= prompt("Entez votre CIN(Numero De Carte Nationnal): ")
    let check=verifieElecteur(candidats,cniElec)
    if(check){
        let cinCand=prompt("Entez CIN de candidat: ")
        let index= searchCandidat(candidats,cinCand)
        if(index !== -1){
            candidats[index].electeurs.push(cniElec)
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
        if(candidats[index].cin.toLowerCase() == cin_cand.toLowerCase()){
           return index 
        }
        index++
    }
    return -1
}
// modifier le partie politique et age un candidat d'apres votre CIN
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
            afficherCandidat(candidat)
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
                afficherCandidat(candidat)
                console.log("")
                number++
            }
        }
        console.log("Nombre Candidats: "+ number)
        console.log("")
    }
}
