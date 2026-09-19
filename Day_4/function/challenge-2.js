function Multiple_1(a, b) {
    return a + b;
}
const Multiple_2 = (x,y)=> x*y
const Multiple_3 = function (a, b){
    return a + b;
}
let res = Multiple_1(15, 17);
console.log(`Miltiple_1 est : ${res}`);
console.log(`Multiple_2 Autre test (15 + 10) = ${Multiple_2(15, 10)}`);
console.log("Multiple_3 "+Multiple_3(15, 17))
