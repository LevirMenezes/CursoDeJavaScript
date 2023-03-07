const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function (nome) {
  console.log(nome);
})


// método mais utilizado.
nomes.forEach((nome) => {
  console.log(nome);
})

nomes.forEach(imprimeNome);


function imprimeNome(nome) {
  console.log(nome);
}
