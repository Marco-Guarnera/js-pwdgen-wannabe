/*
1. Recuperare l'elemento dal DOM
2. Preparare una variabile di tipo stringa
3. Recuperare il nome dell'utente tramite prompt e salvare il dato in una variabile
4. Recuperare il cognome dell'utente tramite prompt e salvare il dato in una variabile
5. Recuperare il colore preferito dell'utente tramite prompt e salvare il dato in una variabile
6. Costruire la password concatenando tutti i dati in una variabile
7. Stampare la password
*/

// Fase di preparazione

// Recupero l'elemento dal DOM
const passwordElement = document.getElementById("password");
console.log(passwordElement);

// Preparo una variabile di tipo stringa
const code = "21";

// Fase di raccolta dati

// Recupero il nome dell'utente tramite prompt e salvo il dato in una variabile
const firstName = window.prompt("Nome:", "Marco");
console.log(firstName, typeof firstName);

// Recupero il cognome dell'utente tramite prompt e salvo il dato in una variabile
const lastName = window.prompt("Cognome:", "Guarnera");
console.log(lastName, typeof lastName);

// Recupero il colore preferito dell'utente tramite prompt e salvo il dato in una variabile
const color = window.prompt("Colore preferito:", "Arancione");
console.log(color, typeof color);

// Fase di elaborazione

// Costruisco la password concatenando tutti i dati in una variabile
const password = firstName + lastName + color + code;
console.log(password);

// Fase di produzione

// Stampo la password
passwordElement.innerText = password;