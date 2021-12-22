let memoria = document.getElementById("carte");                 // Variabile per visualizzare le carte da ricordare
let memoryArrRandom = [];                                       // Dichiarazione array Random
let memoryArrUtente = [];                                       // Dichiarazione array Utente
let quantiIndovinati = document.getElementById("risultato");    // Variabile per prendere il futuro contenitore per il risultato
let tempoRimanente = document.getElementById("tempo");          // Tempo restante
let secondi = 30;

for(let i = 0; i < 5; i++){                                     // Generare 5 numeri random
    let dPc = Math.floor(Math.random() * 100);
    memoryArrRandom.push(dPc);                                  // Array per aggiungere i random
}
console.log(memoryArrRandom);                                   // Controlo in console
memoria.innerHTML = (memoryArrRandom);                          // Stampa su html all'interno dello spam

let orologio = setInterval(function(){                          // Timer tempo per memorizzare il tempo
    secondi--;                                                  // Riduzione sedodi da una variabile
    if(secondi==0){                                             // Se è 0 allora fermare il contatore
        clearInterval(orologio);                                // Comando che interrompe la conta in negativo
    }
    tempoRimanente.innerHTML = ("Memorizza entro: "+ secondi);  // Stampa in html
}, 1000);

setTimeout( function(){                                         // Attesa di 30 secondi prima di iniziare a calcolare e chiedere all'utente di inserire i dati
    
    let indovinati = [];                                        // Array per le carte indovinate
    let sbagliati = [];                                         // Array per le carte indovinate

    for(let i = 0; i < 5; i++)
    {                                                           
        let imputUtente = parseInt(prompt("inserire i numeri")); // Chiedere all'utente di inserire 5 numeri
        memoryArrUtente.push(imputUtente);

            if(memoryArrUtente[i] == memoryArrRandom[i]){       // Se il numero digitato è corretto
                indovinati.push(memoryArrUtente[i]);            // Se indovinati++                                                                  
            }
            else                                                // Else sbagliati++
            {
                sbagliati.push(memoryArrUtente[i]);
            }
    }

    quantiIndovinati.innerHTML = ("Hai azzeccato " + indovinati.length + " carte e " + sbagliati.length + " non le hai azzecate.");  // Dire all'utente quanti ne ha indovinati e quanti sbagliati
    
} , 30000 );

