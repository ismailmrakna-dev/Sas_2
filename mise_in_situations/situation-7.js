 const livres = [
  { titre: "Livre A", annee: 2012, pages: 320 },
  { titre: "Livre B", annee: 2018, pages: 210 },
  { titre: "Livre C", annee: 2020, pages: 450 },
  { titre: "Livre D", annee: 2016, pages: 180 },
  { titre: "Livre E", annee: 2014, pages: 300 },
  { titre: "Livre F", annee: 2019, pages: 260 },
  { titre: "Livre Z", annee: 2019, pages: 260 },
  { titre: "Livre R", annee: 2019, pages: 290 },
  { titre: "Livre M", annee: 2019, pages: 200 },
];
const tab=[]
for(const livre of livres){
    if(livre.annee>=2015){
        tab.push(livre)
        i=0
        while( i < tab.length-1){
            if(tab[i].pages < tab[i+1].pages){
                let obj = tab[i]
                tab[i]=tab[i+1]
                tab[i+1]=obj
                i=0;
            }
            i++
        }
    }

}

console.log(tab)