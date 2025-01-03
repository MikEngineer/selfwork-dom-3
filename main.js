// Crea una pagina html con le seguenti caratteristiche:
// crea un input dove potrai inserire un tot di secondi.
// un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
// un pulsante che, al click, mettera' in pausa il countdown.
// un pulsante che, al click, pulira' l’input e azzerera' il countdown.

// EXTRA:
// se il timer viene stoppato (non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punto




// per ogni secondo dato da value prendi value e lo sostituisci con value-1 al pulsante start
// deve creare un array da 0 a value e fare poi foreach

let input_secondi = document.querySelector("#input_secondi");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let wrapper = document.querySelector("#wrapper");

let secondi = [];

startBtn.addEventListener("click", ()=>{
    for (let index = 0; index <= input_secondi.value; index++) {
        secondi.push(index);
    };

    secondi.forEach((secondo)=>{
        let timer = document.createElement("p");
        timer.innerHTML = secondo;
        wrapper.appendChild(timer);
    });
    
})