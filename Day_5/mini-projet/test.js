function DeleteAppr(arr,nom){
       let index=Rechercher(arr,nom)
       if(index !== -1)
       {
        delete arr[index];
       }
     }
const apprenants = [
  { prenom: "Sara", note: 15 },
  { prenom: "Ali", note: 9 },
  { prenom: "Karim", note: 17 },
]     
function affiche(){
    console.log("prenom " + apprenants.prenom + "note " +apprenants.note)
}
apprenants[0].affiche= function (){
    console.log("prenom "+this.prenom + "note " +this.note)
}
apprenants[0].affiche()
const arr=[] 
Str="ali";
arr.push(Str)
console.log(arr)
