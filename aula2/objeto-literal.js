const valorDigitadoPeloUsuario = 8;

const todosOsValores = {
  3: "valor 3",
  6: "valor 6",
  10: "valor 10",
};

console.log(
  todosOsValores[valorDigitadoPeloUsuario] || "Não existe esse valor!"
);
