function Fibonacci(n){
    let som = 1;
    let temp=0;
    if(n <= 0){
      som=0;
    }
    if(n === 1){
      som=1;
    }
    else for(i=2; i <= n; i++){

      let ind = temp;
      temp = som;
      som = temp + ind;
   
    }
    return som
}
let res = Fibonacci(5);
console.log(`F(4) = ${res}`);

