// Crea una pagina html con le seguenti caratteristiche:
// crea un input dove potrai inserire un tot di secondi.
// un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
// un pulsante che, al click, mettera' in pausa il countdown.
// un pulsante che, al click, pulira' l’input e azzerera' il countdown.

// EXTRA:
// se il timer viene stoppato (non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punto


let input_secondi = document.querySelector("#input_secondi");
let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let wrapper = document.querySelector("#wrapper");
let remainingTime = document.querySelector("#remainingTime");


let interval;
let counter;
let remainingSeconds = 0;

startBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    counter = input_secondi.value;

    if (remainingSeconds !== 0) {
        counter = remainingSeconds;
    }

    interval = setInterval(() => {
        if(counter < 0){
            clearInterval(interval);
            remainingTime.innerHTML = `Tempo scaduto`;
        }else{
            remainingTime.innerHTML = counter;
            counter --;
        }
    }, 1000);
});

stopBtn.addEventListener("click", ()=>{
    clearInterval(interval);
    remainingSeconds = counter;
});

resetBtn.addEventListener("click", ()=>{
    input_secondi.value = "";
    clearInterval(interval);
    remainingTime.innerHTML = "";
})