/*Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano
meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi
di zucchine*/




//creazione array (uso quello del primo snack)


var zucchine = [
    {
        'varietà' : 'a',
        'peso' : 1,
        'lunghezza' : 25
    },
    {
        'varietà' : 'b',
        'peso' : 2,
        'lunghezza' : 8
    },
    {
        'varietà' : 'c',
        'peso' : 3,
        'lunghezza' : 12
    },
    {
        'varietà' : 'd',
        'peso' : 1,
        'lunghezza' : 18
    },
    {
        'varietà' : 'e',
        'peso' : 2,
        'lunghezza' : 9
    },
    {
        'varietà' : 'f',
        'peso' : 3,
        'lunghezza' : 21
    },
    {
        'varietà' : 'g',
        'peso' : 3,
        'lunghezza' : 36
    },
    {
        'varietà' : 'h',
        'peso' : 3,
        'lunghezza' : 13
    },
    {
        'varietà' : 'i',
        'peso' : 3,
        'lunghezza' : 17
    },
    {
        'varietà' : 'l',
        'peso' : 3,
        'lunghezza' : 20
    },
];

//array per +15cm

var sopraMedia = [];

//array sotto i 15 cm

var sottoMedia = [];

//come nello snack 1 creo due var per la somma = 0

var sommaSopraMedia = 0;
var sommaSottoMedia = 0;

//creo ciclo for per sommare le 2 lunghezze separatamente

for (i = 0; i < zucchine.length ; i++ ){
    if (zucchine[i].lunghezza < 15 ){
        sottoMedia.push(zucchine[i]);
        sommaSottoMedia += zucchine[i].peso
    }
    else if (zucchine[i].lunghezza >= 15){
        sopraMedia.push(zucchine[i]);
        sommaSopraMedia += zucchine[i].peso
    }
}

//stampo le due liste con i console.log

console.log('il peso delle zucchine lunghe è : ' + sommaSopraMedia);
console.log('il peso delle zucchine corte è : ' + sommaSottoMedia);


