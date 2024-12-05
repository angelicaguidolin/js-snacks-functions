/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function onlyAletter(names, letter) {
    return names.filter(function(name) {
        return name.charAt(0).toUpperCase() === letter.toUpperCase();
    });
}


// Invoca la funzione qui e stampa il risultato in console
const filterNames = onlyAletter(names, "A");

console.log(filterNames)
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]