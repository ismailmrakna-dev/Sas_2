const apprenant = {
  prenom: "Sara",
  age: 21,
  ville: "Nador",
  estActif: true,
};
console.log(" -----  Access to Object  Dot Notation -----");
console.log(apprenant.prenom)
console.log(apprenant.age)
console.log(apprenant.ville)
console.log(apprenant.estActif)

console.log(" -----  Access to Object Bracket Notation -----");
console.log(apprenant["prenom"])
console.log(apprenant["age"])
console.log(apprenant["ville"])
console.log(apprenant["estActif"])

console.log(" -----  Modify ADD Delete Object -----");
apprenant["prenom"]="Amal";
apprenant.age=20;

apprenant.filiere="AI Machine Learnig";
console.log(apprenant);

delete apprenant.estActif;
console.log (apprenant);

console.log(" -----  Methods Object -----");
const apprenant1 = {
  prenom: "Karim",
  age: 24,
  sePresenter() {
    console.log(`Je m'appelle ${this.prenom} et j'ai ${this.age} ans`)}
  };

apprenant1.sePresenter()

console.log(" -----  Looping Object For...in -----");
for (const cle in apprenant) {
  console.log(`${cle} : ${apprenant[cle]}`)
}

console.log(" -----  Nested Object -----");
apprenant.adresse= {
    ville: "Safi",
    codePostal: "46000",
  };

console.log(apprenant.prenom)       
console.log(apprenant.adresse.ville)
console.log(apprenant.adresse.codePostal)

console.log(" -----  Array of Objects -----");
const apprenants = [
  { prenom: "Sara", note: 15 },
  { prenom: "Ali", note: 9 },
  { prenom: "Karim", note: 17 }
]
console.log(apprenants[0])
console.log(apprenants[1])
console.log(apprenants[2].prenom)
console.log(apprenants[2].note)

console.log(" -----  Lopping Array of Objects For -----");
for (let i = 0; i < apprenants.length; i++) {
  console.log(`${apprenants[i].prenom} : ${apprenants[i].note}`)
}
console.log(" -----  Lopping Array of Objects For...Of -----");
for (const apprenant of apprenants) {
  console.log(`${apprenant.prenom} : ${apprenant.note}`)
}
console.log(" -----  Search in Array Object -----");
function trouverApprenant(tableau, prenom) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i].prenom === prenom) {
      return tableau[i]
    }
  }
  return null
}

console.log(trouverApprenant(apprenants, "Karim"))

console.log("----- Array in Object ----")
const apprenant4 = {
  prenom: "Yassine",
  notes: [12, 15, 9, 17],
}

console.log(apprenant4.notes)  
console.log(apprenant4.notes[0])   
console.log(apprenant4.notes.length)

console.log("----- Method Inside Array in Object ----")
const apprenant5 = {
  prenom: "Yassine",
  notes: [12, 15, 9, 17],
  calculerMoyenne() {
    let somme = 0
    for (let i = 0; i < this.notes.length; i++) {
      somme += this.notes[i]
    }
    return somme / this.notes.length
  },
}

console.log(apprenant5.calculerMoyenne())

console.log("----- Array Object Array ----")
const apprenant2 = [
  {
    prenom: "Sara",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    prenom: "Ali",
    skills: ["Python", "SQL"],
  },
  {
    prenom: "Karim",
    skills: ["JavaScript", "React", "Node", "MongoDB"],
  },
]
console.log(apprenant2[0].skills)     
console.log(apprenant2[0].skills[1])

console.log("----- Looping Array Object Array For...of ----")
for (const apprenant of apprenant2) {
  console.log(`${apprenant.prenom} :`)
  for (const skill of apprenant.skills) {
    console.log(`  - ${skill}`)
  }
}

console.log("----- Object of Objects ----")
const apprenant3 = {
  apprenant1: {
    prenom: "Sara",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  apprenant2: {
    prenom: "Ali",
    skills: ["Python", "SQL"],
  },
}

console.log("----- Looping Inside Object of Objects ----")
console.log(apprenant3.apprenant1.prenom)     
console.log(apprenant3["apprenant2"].prenom)  

for (const cle in apprenant3) {
  console.log(`${apprenant3[cle].prenom} :`)
  for (const skill of apprenant3[cle].skills) {
    console.log(`  - ${skill}`)
  }
}