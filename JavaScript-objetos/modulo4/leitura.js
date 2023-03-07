const dados = require("./cliente.json");
console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);


const jsonConvertido = JSON.parse(clienteEmString);
console.log(jsonConvertido);
console.log(typeof jsonConvertido);
