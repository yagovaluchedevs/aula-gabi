const listaDeCompras = ["pão", "queijo", "ovo"];

console.log(listaDeCompras[0]);
console.log(listaDeCompras[1]);
console.log(listaDeCompras[2]);

const listaDeFuncionario = [
  "Henrique",
  "João",
  {
    nome: "Yago",
    idade: 22,
  },
];

const informacaoYago = listaDeFuncionario[2];

console.log(`O ${informacaoYago.nome} tem ${informacaoYago.idade} anos`);
