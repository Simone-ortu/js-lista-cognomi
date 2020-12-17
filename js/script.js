// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova.


var cognome = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeUtente = prompt('Inserire cognome');
var cognomeCap = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
 console.log(cognomeCap);
 cognome.push(cognomeCap);
 console.log(cognome);
 cognome.sort();
 console.log(cognomeCap.length);




