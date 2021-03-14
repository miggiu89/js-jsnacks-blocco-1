/*Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

var arrayLungo = [1,2,3,4,5,6];
var arrayCorto = [1,2,3];

var mancanti = (arrayLungo.length) - (arrayCorto.length);

for( var i = 0; i < mancanti; i++) {
    arrayCorto.push(rndNumber(1,10));
}

console.log(arrayLungo);
console.log(arrayCorto);

function rndNumber(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}