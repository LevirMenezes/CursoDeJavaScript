const alunos = ["JOAO", "JULIANA", "ANA", "CAIO"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado!`);
    const indice = listaDeAlunosEMedias[0].indexOf(aluno);
    const mediaDoAluno = listaDeAlunosEMedias[1][indice];
    console.log(`${aluno} tem a média ${mediaDoAluno}`)
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("JOAO");
