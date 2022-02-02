iniciarTela();

function iniciarTela(){
    const tela = document.querySelector('body');
    tela.innerHTML = `
        <header>
            <h1>PARROT CARD GAME</h1>
        </header>
        <main>
            <div class="carta">
                <img src="./assets/front.png" alt="frente">
            </div>
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
        "./assets/unicornparrot.gif"
    ]

    let baralho = [];

    for (let i = 0; i<(numeroDeCartas.length)/2; i++){
        for (let j = 0; j < 2; j++){
            baralho.push(cartasPossiveis[i]);
        }
    }
    console.log(baralho);
    //embaralhando
    baralho.sort(comparador);
    
}



//comparar cartas

function comparador() {
    return Math.random() - 0.5;
}
