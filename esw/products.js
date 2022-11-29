let scanf = require('scanf')

const produtos = [
  {
    nome: 'Notebook',
    categoria: 'Eletrônico',
    valor: 1999.99
  },
  {
    nome: 'Impressora',
    categoria: 'Eletrônico',
    valor: 999.99
  },
  {
    nome: 'Caneta BIC',
    categoria: 'Escolar',
    valor: 0.5
  },
  {
    nome: 'Lapiseira Pentel',
    categoria: 'Escolar',
    valor: 7.5
  }
]

function listar() {
  produtos.forEach(p => {
    console.log(p)
  })
}

// function produto_Escolar (value){
//     if (value.categoria == "Escolar")
//     return value;
// }
// var produtosEscolar = produtos.filter(produto_Escolar);
// produtosEscolar.forEach(produtoEscolar => {
//     console.log(produtoEscolar);
// })

// function produto_Eletronico (value){
//     if (value.categoria == "Eletrônico")
//     return value;
// }
// var produtosEletronico = produtos.filter(produto_Eletronico);
// produtosEletronico.forEach(produtoEletro => {
//     console.log(produtoEletro);
// })

function valor(value) {
  var valorMinimo = 0
  var valorMaximo = 2000
  if (value.valor >= valorMinimo && value.valor <= valorMaximo) return value
  else {
    console.log('preço inexistente')
  }
}
var valor = produtos.filter(valor)
valor.forEach(valor => {
  console.log(valor)
})
