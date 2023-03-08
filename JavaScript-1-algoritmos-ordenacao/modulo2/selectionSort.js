const livros = require('../modulo1/lista-livros');


function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato;
  const listaDesordenada = [...arrProdutos];
  const listaOrdenada = [];
  for (let atual = 0; atual < 6; atual++) {
    maisBarato = 0;
    for (let temporario = 0; temporario < listaDesordenada.length; temporario++) {
      if (listaDesordenada[temporario].preco < listaDesordenada[maisBarato].preco) {
        maisBarato = temporario;
      }
    }
    listaOrdenada.push({
      titulo: listaDesordenada[maisBarato].titulo,
      preco: listaDesordenada[maisBarato].preco
    });
    listaDesordenada.splice(maisBarato, 1);
  }
  return listaOrdenada;
}
const teste = menorValor(livros, 0);

const orde = [...new Set(livros)]
console.log(orde.sort());
console.log(livros);
console.log(teste);



