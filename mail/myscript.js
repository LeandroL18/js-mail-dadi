// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// selezione input
const userEmail = document.getElementById("email");

// selezione bottoni 
const sendButton = document.getElementById("sendbutton");

// creazione lista email che possono accedere
const listEmail = ["pingopallino@gmail.com", "pingopallino1@gmail.com", "pingo.pallino.2@gmail.com", "pingo.pallino3@gmail.com"]

// al click del bottone controllo se l'email è tra quelle che può accedere
sendButton.addEventListener("click",
    function() {
        for(let i = 0; i <= listEmail.length; i++){
            let email = listEmail[i];
            if(email === userEmail.value){
                document.getElementById("mio_id").innerHTML = "Benvenuto nell'isola che non c'è!"
                break;
            }
            else if(i === listEmail.length){
                alert("NON PUOI ACCEDERE A QUESTO SITO!");
            }
        }
    }
)