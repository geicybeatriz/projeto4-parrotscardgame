//tela inicial
iniciarTela();

function iniciarTela(){
    const tela = document.querySelector('body');
    tela.innerHTML = `
        <header>
            <h1>PARROT CARD GAME</h1>
        </header>
        <main>
            
        </main>
    `;
    distribuirCartas();
}

//Aqui, temos o prompt, criação do baralho e embaralhamento e distribuição
function distribuirCartas(){
    let numeroDeCartas = 0;
    while ((numeroDeCartas < 4) || (numeroDeCartas > 14) || (numeroDeCartas % 2 !== 0)) {
        numeroDeCartas = prompt("Digite o numero de cartas. O numero deve ser par e entre 4 e 14.");
    }

    let cartasPossiveis =[
        "./assets/bobrossparrot.gif",
        "./assets/explodyparrot.gif",
        "./assets/fiestaparrot.gif",
        "./assets/metalparrot.gif",
        "./assets/revertitparrot.gif",
        "./assets/tripletsparrot.gif",
        "./assets/unicornparrot.gif"]

    let baralho = [];

    for(let i = 0; i < (numeroDeCartas/2); i++){
        for (let j = 0; j < 2; j++){
            baralho.push(cartasPossiveis[i]);
    }}
    //embaralhando
    baralho.sort(comparador);

    //distribuindo as cartas
    const cartasNaMesa = document.querySelector("main");
    for(let i = 0; i < baralho.length; i++){
        cartasNaMesa.innerHTML += `
        <div class="carta" onclick = "virarCarta(this)">
                <img class="frente" src="./assets/front.png" alt="frente">
                <img class="verso escondido" alt="verso" src="${baralho[i]}">
        </div>
        `;
    }
}
//comparar cartas

function comparador() {
    return Math.random() - 0.5;
}

function virarCarta(cartaSelecionada){
    const frenteCarta = cartaSelecionada.querySelector(".frente");
    frenteCarta.classList.toggle("escondido");

    const versoCarta = cartaSelecionada.querySelector(".verso");
    versoCarta.classList.toggle("escondido");

}
