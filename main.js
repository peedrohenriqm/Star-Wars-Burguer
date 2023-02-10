const cardapio = [
    {
        id: 0,
        nome: "Leia  Organa",
        categoria: "frango",
        preco: 6,
        descricao:"muito delicioso, pae"
    },
    {
        id: 1,
        nome: "luke",
        categoria: "carne",
        preco: 15,
        descricao:"delicia, cara"
    },
    /* {
        id: 2,
        nome: "ioda",
        categoria: "carne",
        preco: 25,
        descricao:"delicia, cara"
    },
    {
        id: 3,
        nome: "Vader",
        categoria: "carne",
        preco: 13,
        descricao:"delicia, cara"
    },
    {
        id: 4,
        nome: "Dath ",
        categoria: "kids",
        preco: 40,
        descricao:"delicia, cara"
    } */

];

const sessaoCentral = document.getElementById("sessao-central");
const botoes = document.getElementById("grupo-botoes")

const itensMenu = cardapio.map((burguer)=>{
    exibirBurguerNaTela(cardapio);
});

function exibirBurguerNaTela(listaDeBurguer){
    listaDeBurguer.forEach(burguer => {
        sessaoCentral.innerHTML+= `
            <div class="burguer">
                <p>${burguer.nome}</p>
                <p class="preco">${burguer.preco}</p>
                <p class="burguer-text">${burguer.descricao}</p>
            </div>`;
    });
}




























