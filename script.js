const parrafContador = document.querySelector("p");

let numClicks = 0;

function aumentoClicks() {
    numClicks++;
    parrafContador.innerHTML = numClicks;
    
}

function restoClicks() {
    numClicks--;
    parrafContador.innerHTML = numClicks;
    
}

function reinicioClicks() {
    numClicks = 0;
    parrafContador.innerHTML = numClicks;
}