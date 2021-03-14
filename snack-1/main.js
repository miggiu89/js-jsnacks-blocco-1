/*crea un array di 10 oggetti che rappresentano una
zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.*/




//creazione array con specifiche


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

//calcolo del peso di tutti gli elementi nell'array

var somma = 0;

for ( var i = 0; i < zucchine.length; i++ ){
    var zucchina = zucchine[i].peso;
    somma += zucchina;
}

//aggiungo una zucchina

var nuovaZucchina = {
    'varietà' : 'l',
        'peso' : 3,
        'lunghezza' : 20
}

zucchine.push(nuovaZucchina)

for ( var i = 0; i < zucchine.length; i++ ){
    var zucchina = zucchine[i].peso;
    somma += zucchina;
}

console.log('peso totale ' + somma);
