console.log("Hello");
console.log("Hello");
const prompt=require('prompt-sync')();
console.log(" ---- Code PIN ----")
let num = parseInt(prompt('Donnez un numbre entiere: '));
do {
  let word=prompt(' ---  Clique!! --- ');
  let i=0;
  var codP="";
  let ran="1207432154756863997906635222791341347679089455126788977"
  var j=1;
  while(i<num){
    j++;
    let chiffre;
    if(i>3){
      chiffre=Math.floor(ran*j/i)%10  ;
      codP = codP+ chiffre;
    }
    if(i<6){
        codP = codP+ chiffre;

    }if(i>1){
        chiffre=Math.floor(ran*i/j)%10;
        codP = codP+ chiffre;

    }
    if(i<9){
        chiffre=Math.floor(ran*j)%10 
        codP = codP+ chiffre;

    }
    if(i>9){
        chiffre=ran*i%10;
        codP = codP+ chiffre;

    }
  }
}while(word === null);
