let pessoas = [
  { nome: "João", idade: 30, marca: "gol" },
  { nome: "Maria", idade: 25, marca: "golf" },
  { nome: "Pedro", idade: 40, marca: "audi" },
  { nome: "Ana", idade: 20, marca: "gol" },
];

const idadeMaiorQueVinte = pessoas.filter(function (item) {
  return item.marca === "gol";
});

console.log(idadeMaiorQueVinte);
