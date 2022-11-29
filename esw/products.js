let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

function produto_Escolar (value){
    if (value.categoria == "Escolar")
    return value;
}
var produtosEscolar = produtos.filter(produto_Escolar);
produtosEscolar.forEach(produtoEscolar => { 
    console.log(produtoEscolar);
})

function produto_Eletronico (value){
    if (value.categoria == "Eletrônico")
    return value;
}
var produtosEletronico = produtos.filter(produto_Eletronico);
produtosEletronico.forEach(produtoEletro => { 
    console.log(produtoEletro);
})
