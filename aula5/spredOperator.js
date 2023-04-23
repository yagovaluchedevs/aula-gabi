const vidaSocial = {
  linkedin: "Linkedin",
  facebook: "Facebook",
  instagram: "Instagram",
};

const dadosPessoais = {
  nome: "Gabi",
  idade: 22,
  profissao: "Desenvolvedora",
};

const informacaoUsuario = {
  ...dadosPessoais,
  ...vidaSocial,
};

console.log(informacaoUsuario);

const soma = (...number) => {
  let total = 0;

  for (let index = 0; index < number.length; index++) {
    total += number[index];
  }
  return total;
};

console.log(soma(2, 2, 2, 2));

const somaForEach = (...number) => {
  let total = 0;

  number.forEach((num) => {
    total += num;
  });
  return total;
};

console.log(somaForEach(2, 2, 2, 2));
