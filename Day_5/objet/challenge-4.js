const prompt=require("prompt-sync")();
let x=Number(prompt("Donnez moi le x du point "));
let y=Number(prompt("Donnez moi le y du point "));
let nom=prompt("Donnez moi le Nom du point ");
const Point={}
Point.nom=nom
Point.X=x
Point.Y=y
console.log(Point)
console.log(Point.nom+" ("+Point.X+", "+Point.Y+")" )
console.log("----- Update Point -----")
Point.X=Number(prompt("Donnez moi le x du point "));
Point.Y=Number(prompt("Donnez moi le y du point "));
Point.nom=prompt("Donnez moi le Nom du point ");
console.log(Point)
console.log(Point.nom+" ("+Point.X+", "+Point.Y+")" )