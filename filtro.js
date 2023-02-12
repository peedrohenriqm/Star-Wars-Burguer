
const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao =>botao.addEventListener("click", filtraIntens));

function filtraIntens () {
    let botaoId = document.getElementById(this.id)
    let categoriaItem = botaoId.value;
    let itensFiltrados = cardapio.filter( item => item.categoria == categoriaItem );
    mostraNaTela(itensFiltrados);
    if(categoriaItem == "tudo") {
        mostraNaTela(cardapio);
    }
}