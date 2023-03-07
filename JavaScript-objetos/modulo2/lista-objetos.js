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

cliente.endereco.push({
  rua: "Joseph Ledder",
  numero: 1337,
  apartamentos: false,
})

console.log(cliente);
