const cardapio = [
    {
        id: 0,
        nome: "Leia  Organa",
        categoria: "frango",
        preco: 15.90,
        descricao:"Pão Brioche, Frango Empanado, Queijo Cheddar, Salada e Molho da Casa."
    },
    {
        id: 1,
        nome: "Darth Vader",
        categoria: "carne",
        preco: 28.90,
        descricao:"Pão Australiano, 3 Smash 90G, Queijo Cheddar, Cebola Caramelizada, Bacon e Molho da Casa."
    },
    {
        id: 2,
        nome: "Mestre Ioda",
        categoria: "carne",
        preco: 28.90,
        descricao:"Pão Australiano, 3 Smash 90G, Queijo Prato, Anel de Cebola, Bacon e Molho Barbecue."
    },
    {
        id: 3,
        nome: "Luke Skywalker",
        categoria: "carne",
        preco: 27.90,
        descricao:"Pão Brioche, Blend 100G, Queijo Provolone, Anel de Cebola, Bacon e Molho da Casa."
    },
    {
        id: 4,
        nome: "Obi-Wan Kenobi",
        categoria: "frango",
        preco: 24.90,
        descricao:"Pão com Gergilin, Frango Empanado, Queijo Prato, Salada, Bacon e Molho da Casa."
    },
    {
        id: 5,
        nome: "Palpatine",
        categoria: "carne",
        preco: 16.90,
        descricao:"Pão Australiano, Smash 100G, Queijo Prato, Salada, Bacon e Molho da Casa."
    },
    {
        id: 6,
        nome: "Han Solo",
        categoria: "frango",
        preco: 26.90,
        descricao:"Pão Australiano, Frango Empanado, Queijo Provolone, Salada, Bacon e Molho da Casa."
    },
    {
        id: 7,
        nome: "R2-D2",
        categoria: "sobremesa",
        preco: 13.90,
        descricao:"Milk-Shake de Ovomaltine com Calda de Chocolate"
    },
    {
        id: 8,
        nome: "C-3PO",
        categoria: "sobremesa",
        preco: 14.90,
        descricao:"Banoffee com Recheio Gourmet"
    },
    {
        id: 9,
        nome: "Chewbacca",
        categoria: "sobremesa",
        preco: 15.90,
        descricao:"Torta de Chocolate com Kit-Kat"
    },

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
       <h1>___________________________</h1>
       </div>
       ` 
    })
    
}





























