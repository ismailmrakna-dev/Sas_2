const employes = [
  { nom: "Sara", departement: "IT", salaire: 8000 },
  { nom: "Ali", departement: "RH", salaire: 6000 },
  { nom: "Karim", departement: "IT", salaire: 9500 },
  { nom: "Nadia", departement: "RH", salaire: 7200 },
  { nom: "Yassine", departement: "Finance", salaire: 8800 },
  { nom: "Imane", departement: "IT", salaire: 7000 },
];
for (const employe of employes){
    let cond=true
    let comp=employe.departement
    let nom=employe.nom
    let salaire = employe.salaire
    for(const employe of employes){
        if(comp === employe.departement && employe.nom !== nom){
            if(employe.salaire > salaire){
                cond=false;
                break
            }
        }
    }
    if (cond){
        console.log("")
        console.log(employe.departement)
        console.log("")
        console.log(employe)   
    }
}
