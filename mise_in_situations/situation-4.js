const commandes = [
  { client: "Ahmed", montant: 250 },
  { client: "Sara", montant: 400 },
  { client: "Ahmed", montant: 180 },
  { client: "Karim", montant: 320 },
  { client: "Sara", montant: 150 },
  { client: "Ahmed", montant: 90 },
];
obj={}
for (const clients of commandes){
    if(obj[clients.client]){
        obj[clients.client] += clients.montant
    }
    else {
        obj[clients.client]=clients.montant
    }
}

  
console.log(obj)