console.log("Hello");
const prompt=require('prompt-sync')();
const array=[];
console.log("-------------- Menu de Programme ---------------")
console.log(" **1. Ajouter** un apprenant (prenom + note), qui devient un objet ajoute au taleau")
console.log(" **2. Afficher** tous les apprenants enregistres")
console.log(" **3.  Rechercher** un apprenant par son prenom")
console.log(" **4. Mettre a jour** la note d'un apprenant existant")
console.log(" **5. Supprimer** un apprenant par son prenom")
console.log(" **6. moyenne de la classe **")
console.log(" **7. Validation des notes **")
console.log(" **8. Ajouter New Note  ***")
console.log(" **9. Ajouter New Skill  ***")
console.log(" **0. Quitter** le programme")
function Ajouter(arr){
     const apprenant={}
     let cont=true
     do{
     let prenom=prompt(" Entez le nom: ")
     if(Rechercher(arr,prenom) === -1){
        console.log("le prenom que vous avez entree Exist")
     }
     else {apprenant.prenom=prenom
         cont=false;
      }
       }while(cont=true);


     apprenant.note=[]
     cont=true
     do{
     let note=Number(prompt(" Entez la note(0-20): "))
     if(note<0 || note>20){
        console.log("Erreur la note entree Incompatible")
     }
     else {
         apprenant.note.push(note)
         let num= Number(prompt("--- For Stop insert Note tapez 0 ---"))
         if(num===0){
            cont = false;
         }
     }
       }while((note<0 || note>20 ) && cont === true );
       cont=true
       apprenant.skills=[]
        do{
     let skill=(prompt(" Enter skill "))
         apprenant.skills.push(skill)
         let num= Number(prompt("--- For Stop insert Note tapez 0 ---"))
         if(num===0){
            cont = false; 
     }
       }while(cont === true );

     
     apprenant.calMoyNote =function (){
        let som=0;
        for(let i=0 ; i < this.note.length;i++){
            som += this.note[i]
        }
        return som/this.note.length
    }

     arr.push(apprenant)
     }

     

function Affichage(arr){
     let j=0
     for (const apprenant of arr) {
        j++
        console.log(`Etudiant ${j} : ${apprenant.prenom}   Notes: ${apprenant.note}   Skills: ${apprenant.note}`)
       }
     }


function Rechercher(arr,nom){
     if (arr.length === 0)
        return 0
     let j=0
     for (const apprenant of arr) {
       if(apprenant.prenom === nom ){
         return j
       }
       j++
     }
     return -1
}
function AjouterNote(arr,nom){
    let newnote = Number(prompt("Entez la nouvelle note"))
       let index=Rechercher(arr,nom)
       if(index !== -1)
       {
        arr[index].note.push(newnote);
       }
       else return console.log("Apprenant no Exist")

     }
function AjouteSkill(arr,nom){
    let newskill = (prompt("Entez la nouvelle skill :"))
       let index=Rechercher(arr,nom)
       if(index !== -1)
       {
        arr[index].skills.push(newskill);
       }
       else return console.log("Apprenant no Exist")

     }
function UpdateNote(arr,nom){
    let newnote = Number(prompt("Entez la nouvelle note"))
    let notInd = parseInt(prompt("Entez l'indice de la note modifie 0-.. "))
    let index=Rechercher(arr,nom)

    if(index !== -1)
       {
        arr[index].note[notInd] = newnote;
        console.log (" Note Update ")
       }
    else return console.log("Apprenant no Exist")

     }     

function DeleteAppr(arr,nom){
       let index=Rechercher(arr,nom)
       if(index !== -1)
       {
        for(i=index; i<arr.length ; i++)
            arr[i]=arr[i+1];
       }
       arr.length -= 1;
     }     
function Maximum(arr)  {
   let max=arr[0].calMoyNote;
   for(let i=1; i< arr.length; i++){
    if(arr[i].calMoyNote() > max){
        max=arr[i].calMoyNote();
        index=i
    }
}   return index;
}   
function Minimum(arr)  {
    let min = arr[0].calMoyNote;
    for(let i=1; i< arr.length; i++){
    if(arr[i].calMoyNote() < min){
        min=arr[i].calMoyNote();
        index=i
    }
} 
    return index
}   

cont=true;

do{
    let choix = parseInt(prompt(" D'apres le menu, Entrez votre choix: "))
    switch(choix) {
        case 0:
           cont=false; break;
        case 1:
           Ajouter(array); break;
        
        case 2:
          Affichage(array); break;
        
        case 3:
            let prnom= prompt("Entez le prenom d'etudiant que vous voulez de rechercher ");
            let index=Rechercher(array,prnom);
            if (index !== -1){
                console.log(`Apprenant exist ${prnom}`);
            }
            else console.log("Apprenant No Exist");
            break;

        
        case 4:
            let nm= prompt("Entez le prenom d'etudiant que vous voulez de rechercher ");
                UpdateNote(array,nm)
                break;
        
        case 5:
            let nom= prompt("Entez le prenom d'etudiant que vous voulez de suprimmer ");
                DeleteAppr(array,nom)
                console.log(`Apprenat ${nom} Deleted`)
                break;
        case 6: 
           let som=0;
           for(let i=0; i<array.length; i++){
            som += array[i].calMoyNote()
        }  console.log("Moyenne de Classe : "+ (som/array.length)) 
        break;   
        case 7: 
            index_maj=Maximum(array)
            index_min=Minimum(array)
            console.log("le Majorant apprenant est" + array[index_maj] +" Sa Moy Note : "+array[index_maj].calMoyNote+"/20")
            console.log("le Minorant apprenant est" + array[index_min] +" Sa Moy Note : "+array[index_min].calMoyNote+"/20")
        break;
        case 8: AjouterNote(array,nom); break; 
        case 9: AjouteSkill(array,nom);break;  
        default : console.log("!!!  Please, Your Choice Should be in Menu !!! ")
    }   

}while(cont);

