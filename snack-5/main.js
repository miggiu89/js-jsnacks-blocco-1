/*Crea un array di numeri interi e fai la somma di tutti gli
elementi che sono in posizione dispari */

//creo un array d numeri interi
var numeriInteri = [1,17,2,9,34,75,80,100,33,3];
var somma = 0;

//ciclo tutti i numeri presenti nell'array, se modulo 3 di = 0 , allora li inserisci nella somma
for (i=0; i<numeriInteri.length ; i++){
    if (i%3 == 0){
        somma = somma + numeriInteri[i];
    }
}

console.log('Somma dei numeri dispari: ' + somma);

    
    
    
