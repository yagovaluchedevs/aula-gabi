let pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 40 },
  { nome: "Ana", idade: 20 },
];

const entendendoValores = pessoas.find(function (item, position, array) {
  // Primeiro argumento (item) sempre será cada elemento dentro do array, não importa o nome que for dado
  // Segundo argumento (position) sempre será a posição de cada elemento dentro do array, não importa o nome que for dado
  // Terceiro argumento (array) sempre será o array inteiro, não importa o nome que for dado
  // Essas regras citadas server para os seguintes métodos de array. map, filter, find, forEach.
  console.log(item);
  console.log(position);
  console.log(array);
});

const maiorQueVinte = pessoas.find(function (item) {
  return item.idade > 20;
});

console.log(maiorQueVinte);
