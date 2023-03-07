const cliente = {
  nome: "Joao",
  idade: 24,
  email: "levirmenezes@gmail.com",
  telefone: ['11122233356', '22233344456'],
  saldo: 200,
  efatuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insulficiente")
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
    }
  }
};

cliente.efatuaPagamento(25);
