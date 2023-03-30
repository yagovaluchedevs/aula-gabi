let nomes = ["Ana", "João", "Pedro", "Maria"];

for (let index = 0; index < nomes.length; index++) {
  if (nomes[index] === "Maria") {
    nomes[index] = "Gabi";
  }
}
console.log("primeiro exercício", nomes);

let pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 },
  { nome: "Ana", idade: 20 },
];

for (let index = 0; index < pessoas.length; index++) {
  if (pessoas[index].nome === "Pedro") {
    pessoas[index].idade = 20;
  }
}

console.log("segundo exercício", pessoas);
