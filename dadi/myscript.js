// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// definizione variabili
const min = 1;
const max = 6;
let giocatore = Math.floor(Math.random() * (max)) + min;
let computer = Math.floor(Math.random() * (max)) + min;

// selezione bottoni 
const sendButton = document.getElementById("sendbutton");

// al click del bottone controllo 
sendButton.addEventListener("click",
    function() {
        // stampo il numero generato per l'user
        document.getElementById("giocatore").innerHTML = "Il tuo numero è: " + giocatore;
        // stampo il numero generato per il computer
        document.getElementById("computer").innerHTML = "Il numero del computer è: " + computer;

        // condizione
        if(giocatore > computer){
            document.getElementById("vincitore").innerHTML = "Hai vinto!";
        }
        else{
            document.getElementById("vincitore").innerHTML = "Hai perso!"
        }
    }
)