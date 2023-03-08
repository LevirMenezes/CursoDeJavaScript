const listaLivros = require('../../JavaScript-1-algoritmos-ordenacao/modulo1/lista-livros');
const quickSort = require('../modulo3/quick-sort')


function busca(array, de, ate, valorBuscado) {
  const meio = Math.floor((de + ate) / 2);
  const atual = array[meio];

  if (de > ate) {
    return -1
  }

  if (valorBuscado === atual.preco) {
    return meio;
  }

  if (valorBuscado < atual.preco) {
    return busca(array, de, meio-1, valorBuscado);
  }

  if (valorBuscado > atual.preco) {
    return busca(array, meio + 1, ate, valorBuscado);
  }
}

console.log(busca(quickSort(listaLivros), 0, listaLivros.length - 1, 20));
