/*Scrivi una funzione che fonda due array (aventi lo stesso
    numero di elementi) prendendo alternativamente gli
    elementi da uno e dall’altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].*/

var numeri = [1,2,3,4,5,6,7];
var lettere = ['a', 'b','c','d','e','f','g'];

var misto = [];

/*for (var  i = 0; i < numeri.length; i++){
    misto.push(numeri[i]);
};

for (var  i = 0; i < lettere.length; i++){
    misto.push(lettere[i]);
};*/

for (var  i = 0; i < numeri.length; i++){
    misto.push(numeri[i]);
    misto.push(lettere[i]);
};

console.log(misto);