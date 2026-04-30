let diaDaSemana = Number(prompt("Digite um numero de 1 - 7 para descobrir o dia da semana: "))

switch (diaDaSemana) {
    case 1:
        alert("Domingo")
        break;
    case 2:
        alert("Segunda-feira")
        break;
    case 3:
        alert("Terça-feira")
        break;
    case 4:
        alert("Quarta-feira")
        break;
    case 5:
        alert("Quinta-feira")
        break;
    case 6:
        alert("Sexta-feira")
        break;
    case 7:
        alert("Sabado")
        break;

    default:
        alert("Não existe esse dia da semana")
        break;
}