const matchs = [
  { equipe: "Raja", resultat: "victoire" },
  { equipe: "Wydad", resultat: "defaite" },
  { equipe: "Raja", resultat: "nul" },
  { equipe: "FUS", resultat: "victoire" },
  { equipe: "Wydad", resultat: "victoire" },
  { equipe: "Wydad", resultat: "victoire" },
  { equipe: "Wydad", resultat: "victoire" },
  { equipe: "FUS", resultat: "defaite" },
  { equipe: "Raja", resultat: "victoire" },
];
const obj={}
for (const match of matchs){
    if(obj[match.equipe]){
        if(match.resultat==="victoire")
            obj[match.equipe]+=3
        if(match.resultat==="nul")
            obj[match.equipe]+=1
        if(match.resultat ==="defaite")
            obj[match.equipe]+=0
    }
    else {
        if(match.resultat==="victoire")
            obj[match.equipe]=3
        if(match.resultat==="nul")
            obj[match.equipe]=1
        if(match.resultat ==="defaite")
            obj[match.equipe]=0
    }
}
console.log(obj)

const classement=[]
for(const equipe in obj){
    classement.push({equipe,points: obj[equipe]})
}
function trier(obj){
    let max=obj[0].points
    let index=0
    for (i=0 ; i< classement.length ; i++){
        let temp={}
        index=i
        max = obj[i].points
        for (j=i; j < classement.length; j++){
            if(obj[j].points > max){
                max = obj[j].points
                index=j
            }
        }
        if(i !== index){
            temp=obj[i]
            obj[i]=obj[index]
            obj[index] = temp
        }

    }
}
trier(classement)
console.log("Classement: ")
console.log(classement)