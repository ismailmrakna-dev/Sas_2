function toLower(str){
    
    let str1=""
    let lower="abcdefghijklmnopqrstuvwxz"
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXZ"
    for (let char of str){
        let cond=true
        for(j=0;j<upper.length;j++){
            if(char === upper[j]){
                char=lower[j]
                
            }
        }
        if (cond){
           str1 += char    
}
    }
    return str1
}
console.log(toLower("ABnrS"))