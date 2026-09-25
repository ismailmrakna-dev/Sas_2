const prompt= require("prompt-sync")();

const {
    ajouterCandidat,
    ajouterMultiCand,
    afficherCandidat,
    affichageCandidats  
}=require("../functions/candidats").default;

const {
    voterCandidat,
    verifieElecteur,
    searchCandidat  
}=require("../functions/electeurs").default;

const {
    modifierCandidat,
    editCandidat,
    lengthArr,
    SupprimerCandidat,
    rechercheCandidat 
}=require("../functions/candidat").default;
const {
    nombreCandidat,
    nombreVotes,
    trierCandidats,
    topCandidats,
    partiPolitiqueCandidats,
    statistics 
}=require("../functions/statistics").default;
const {candidats}=require("../data/data").default;

function startMenu(){
let arret = true;
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
            ajouterMultiCand()
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
                editCandidat()
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
            statistics()
            break;  }         
        default : console.log("!!!  Please, Your Choice Should be in Menu !!! ")
    }   

}while(arret);
}
export default{
    startMenu 
}