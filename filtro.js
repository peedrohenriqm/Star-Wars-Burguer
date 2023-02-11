
const botoes = document.querySelectorAll(".btn")
botoes.forEach(btn => btn.addEventListener("click", filtrarBurguer))

function filtrarBurguer(){
    let elementoBotao = document.getElementById(this.id)
    let categoria = elementoBotao.value;
    let cardapioFiltrado = cardapio.filter(item=> item.categoria == categoria)
    console.log(cardapioFiltrado);
}