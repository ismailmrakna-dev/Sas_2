const nombres = [45, 12, 78, 33, 90, 22, 15,16, 67];
let dif=Math.abs(nombres[1]-nombres[0])
let num1=0
let num2=0
for(let i=1; i<nombres.length-1;i++){
    if(Math.abs(nombres[i]-nombres[i+1]) < dif){
        dif=Math.abs(nombres[i]-nombres[i+1])
        num1=nombres[i]
        num2=nombres[i+1]
    }
}
console.log(num2+"-"+num1+"="+dif)