let primeiraCarta = undefined;
let segundaCarta = undefined;

let baralho = [];

let contador = 0;
let jogadas = 0;

let intervalo = undefined;

iniciarTela();

function iniciarTela(){
    const tela = document.querySelector('body');
    tela.innerHTML = `
        <header>
            <h1>PARROT CARD GAME</h1>
        </header>
        <div class="cronometro">0</div>
        <main>
            
        </main>
    `;
    distribuirCartas();
}

let tempo = document.querySelector(".cronometro");

function distribuirCartas(){

    intervalo = setInterval(tempoDeJogo, 1000);

    let numeroDeCartas = 0;
    while ((numeroDeCartas < 4) || (numeroDeCartas > 14) || (numeroDeCartas % 2 !== 0)) {
        numeroDeCartas = prompt("Digite o numero de cartas. O numero deve ser par e entre 4 e 14.");
    }

    let cartasPossiveis =[
        "bobrossparrot",
        "explodyparrot",
        "fiestaparrot",
        "metalparrot",
        "revertitparrot",
        "tripletsparrot",
        "unicornparrot"
    ]

    cartasPossiveis.sort(comparador);
    
    for(let i = 0; i < (numeroDeCartas/2); i++){
        for (let j = 0; j < 2; j++){
            baralho.push(cartasPossiveis[i]);
        }
    }

    baralho.sort(comparador);

    const cartasNaMesa = document.querySelector("main");
    for(let i = 0; i < baralho.length; i++){
        cartasNaMesa.innerHTML += `
        <div class="carta" onclick = "verificarCarta(this)">
            <div class="face faceFrente" >
                <img class="frente"  alt="frente da carta" src="./assets/front.png">
            </div>
            <div class="face faceVerso escondido" >
                <img class="verso"alt="verso da carta" src="./assets/${baralho[i]}.gif">
            </div>
        </div>
        `;
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function virarCarta(cartaVirada){
    cartaVirada.classList.toggle("escondido");
    cartaVirada.classList.toggle("bloquear-click");
    
}

function verificarCarta(cartaVirada) {
    if (primeiraCarta === undefined){
        primeiraCarta = cartaVirada;
        virarCarta(cartaVirada);
        jogadas++;
    } else if (segundaCarta === undefined) {
        segundaCarta = cartaVirada;
        virarCarta(cartaVirada);
        jogadas++;
        compararCartas();
    } else {
        return;
    } 
}

function compararCartas(){
    const valorPrimeiraCarta = primeiraCarta.childNodes[3].childNodes[1].attributes[2].nodeValue;
    const valorSegundaCarta = segundaCarta.childNodes[3].childNodes[1].attributes[2].nodeValue;

    if (valorPrimeiraCarta === valorSegundaCarta){
        primeiraCarta = undefined;
        segundaCarta = undefined;
        contador += 2;
        setTimeout(finalizarJogo,500);
    } else {
        setTimeout(virarCarta, 1000, primeiraCarta);
        setTimeout(virarCarta, 1000, segundaCarta);
        setTimeout(indefinirCarta, 1000);
    }
}

function indefinirCarta(){
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

function finalizarJogo(){
    if (contador === baralho.length){
        clearInterval(intervalo);
        alert(`"Você ganhou em ${jogadas} jogadas! E seu tempo foi de ${tempo.innerHTML} segundos!"`);
        const reiniciarJogo = prompt("Deseja reiniciar o jogo? Sim ou não");
        switch(reiniciarJogo){
            case "Sim":
            case "sim":
            case "s":
            case "SIM":
                location.reload();
                break;
        }
    }
}

function tempoDeJogo(){
    tempo.innerHTML = parseInt(tempo.innerHTML) + 1;
}