const contador = document.getElementById("contador");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const botaoResetar = document.getElementById("resetar");

let valor = 0;

function atualizarContador() {
    contador.textContent = valor;
}

botaoAumentar.addEventListener("click", () => {
    valor++;
    atualizarContador();
});

botaoDiminuir.addEventListener("click", () => {
    valor--;
    atualizarContador();
});

botaoResetar.addEventListener("click", () => {
    valor = 0;
    atualizarContador();
});