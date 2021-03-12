//var parola = parseInt(prompt('inserisci parola'));

//var parolaGirata = [];

/*for (var i = 0; i < parola.length; i++) {
    parolaGirata[i] = parola[parola.length - 1 - i];
}

console.log(parolaGirata);*/

var parola = reverseString(prompt('inserisci una parola'));

console.log(parola);

function reverseString(parola) {
    var parolaGirata = "";
    for ( var i = parola.length-1; i >= 0; i--) {
        parolaGirata += parola.charAt(i)
    }
    return parolaGirata
};

