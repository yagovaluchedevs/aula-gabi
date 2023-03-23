const temperatura = 26;
let msg;

switch (temperatura) {
  case 40:
    msg = "É igual a 40";
    break;
  case 27:
    msg = "É igual a 27";
    break;
  case !"26":
    msg = "É igual a 26 line 12";
    break;
  case "26":
    msg = "É igual a 26 line 14";
    break;
  case 26:
    msg = "É igual a 26 line 16";
    break;
  default:
    msg = "Nenhuma das opções abaixo";
    break;
}

console.log(msg);
