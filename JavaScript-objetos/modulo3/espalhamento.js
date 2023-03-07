const cliente = {
  nome: "Joao",
  idade: 24,
  email: "levirmenezes@gmail.com",
  telefone: ['11122233356', '22233344456']
};

cliente.endereco = [{
  rua: "R. Joseph Climber",
  numero: 1337,
  apartamento: true,
  complemento: "ap 934"
}];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);


const encomenda = {
  destinatario: cliente.nome,
  ...cliente.endereco[0],
}

console.log(encomenda);

