const transactions = [
  { type: "depot", montant: 500 },
  { type: "retrait", montant: -200 },
  { type: "depot", montant: 100 },
  { type: "depot", montant: 100 },
  { type: "retrait", montant: -400 },
  { type: "depot", montant: 100 },
  { type: "depot", montant: 100 },
  { type: "depot", montant: -100 },
  { type: "retrait", montant: -300 },
];
const obj={
    solde:0,
}
const sol=[]
let i=0
for (const trans of transactions){
    i++
    obj.solde += trans.montant
    if(obj.solde < 0){
        sol.push(i)
    }

    
}
console.log(obj)
console.log(sol)
console.log(sol[0])