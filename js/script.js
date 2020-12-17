// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il
// nuovo utente si trova.

// variabili
var cognome = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var cognomeUtente = prompt('Inserire cognome');

// Maiuscola al cognome inserito

var cognomeCap = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1);
console.log(cognomeCap);

// Aggiunta all'arroy la nostra variabile
 cognome[cognome.length]= cognomeCap;
 console.log(cognome);
 cognome.sort();

// stampa dell'arroy in ordine alfabetico
 for (let i = 0; i < cognome.length; i++) {
    console.log(cognome[i])
  }
//  stampa dell'ordine dellaa nostra variabile nell'arroy
  console.log(cognome.indexOf(cognomeCap));

