let aprendizado = Number(prompt("Digite um numero para descobrir o que você aprendeu"))

function seSenao() {
  let perguntaUsuario = prompt(`Estudou no feriado?
    Sim ou Nao
    `)
  if (perguntaUsuario.toLowerCase == "sim") {
    alert("Parabéns")
  }
}

function soma(x, y) {
  return x + y
}

function daPraCriarUmaFuncaoDentroDeOutraFuncao() {
  function teste() {
    alert("teste")
  }
  teste()
}

function perguntaNumeros() {
  let x = Number(prompt("Digite o primeiro número"))
  let y = Number(prompt("Digite o segundo número"))
  alert(soma(x,y))
}

switch (aprendizado) {
  case 1:
    seSenao()
    break;

  case 2:
    daPraCriarUmaFuncaoDentroDeOutraFuncao()
    break;
  case 3:
    perguntaNumeros()
    break;
  
    default:
    break;
}
