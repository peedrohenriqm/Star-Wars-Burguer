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
    {
        id: 2,
        nome: "ioda",
        categoria: "frango",
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
    }

];

const conteudoCentral = document.querySelector(".conteudo-central");

function mostraNaTela (listaCardapio) {
    conteudoCentral.innerHTML = ""
    listaCardapio.forEach(item => {
       conteudoCentral.innerHTML += `
       <div id=${item.nome}>
       <h1>${item.nome}</h1>
       <h1>${item.descricao}</h1>
       <h1>${item.preco}</h1>
       </div>
       ` 
    })
    
}





























