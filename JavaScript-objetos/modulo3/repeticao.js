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

for (let chave in cliente) {
  console.log(`A chave ${chave} tem um valor ${cliente[chave]}`);
}
