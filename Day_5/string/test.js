let messsage="  Bonjour A toUs, on va cOmmencer";
console.log("Message = '"+messsage+"'")
console.log("--- Length  ---");
console.log(messsage.length);
console.log("--- Indix 11  ---")
console.log(messsage[11]);
console.log("--- LowerCase  ---")
console.log(messsage.toLowerCase());
console.log("--- UpperCase  ---")

console.log(messsage.toUpperCase());
console.log("---  Slice  ---")

console.log(messsage.slice(5,9));
console.log("---  trim  ---")
console.log(messsage.trim());
console.log("---  Split  ---")
console.log(messsage.split(" "));
console.log("---  Join  ---")
console.log(["messsage","correct"].join(" not "));
console.log("---  Replace  ---")
console.log(messsage.replace("cOmmencer","travaille"));
console.log("---  ReplaceAll  ---")
console.log(messsage.replaceAll("o","-"));
let nom="ALi BR";
let age=24;
let prof="teacher";
let def=`I am ${nom} , I have ${age} years old , I am a ${prof}` ;
console.log(def);
