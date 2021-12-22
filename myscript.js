let memoria = document.getElementById("carte"); 
let memoryArrRandom = [];
let memoryArrUtente = [];


for(let i = 0; i < 5; i++){                                 // Generare 5 numeri random
    let dPc = Math.floor(Math.random() * 100);
    memoryArrRandom.push(dPc);
}
console.log(memoryArrRandom);                               // controlo in console
memoria.innerHTML = (memoryArrRandom);                      // stampa su html all'interno dello spam

let memorizzazioneCarte = setInterval()

for(let i = 0; i < 5; i++){                                  // Generare 5 numeri random
    let imputUtente = parseInt(prompt("inserire i numeri")); //da metter dentro un ciclo
    memoryArrUtente.push(imputUtente);
}



// aspettare 30 secondi
// chiedere all'utente di inserire 5 numeri 
// confrontare i risultait e far vedere quante caselle combaciano



