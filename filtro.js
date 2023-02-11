
const botoes = document.querySelectorAll(".btn")

botoes.forEach(btn => btn.addEventListener("click", filtrarBurguer))

function filtrarBurguer(){
    let elementoBtn = document.getElementById(this.id)
    let categoria = elementoBtn.value;
    let cardapioFiltrado = cardapio.filter(item=> item.categoria == categoria)
    mostraNaTela(cardapioFiltrado);
}