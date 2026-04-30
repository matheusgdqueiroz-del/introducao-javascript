let primeiroInput = document.querySelector("#primeiroNumero")
let segundoInput = document.querySelector("#segundoNumero")
let botaoSomar = document.querySelector("#btnSoma")
let apresentaResultado = document.querySelector("#resultado")

function soma() {
    let resultado = Number(primeiroInput.value) + Number(segundoInput.value)
    apresentaResultado.innerHTML = `${resultado}`
}

botaoSomar.addEventListener("click", soma)
 