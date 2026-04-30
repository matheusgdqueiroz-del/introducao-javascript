const carroImagem = document.querySelector("#carro")
const andarInput = document.querySelector("#andar")
const botaoMover = document.querySelector("#mover")
const reInput = document.querySelector("#re-input")
const botaoRe = document.querySelector("#re")
const botaoBuzina = document.querySelector("#buzinar")
const corInput = document.querySelector("#cor")
const botaoCor = document.querySelector("#mudar-cor")


let carro = {
  modelo: "HB20 Sedan",
  marca: "Hyundai",
  ano: 2025,
  cor: "vermelho",
  

  dirigir(distancia) {
    let atual = parseInt(carroImagem.style.left) || 0
    carroImagem.style.left = (atual + distancia) + "px"
  },
  re(distancia) {
    let atual = parseInt(carroImagem.style.left) || 0
    carroImagem.style.left = (atual - distancia) + "px"
  },
  buzina(){
    alert("Biiiiiiiiiii")
  },
  mudarCor(novaCor) {
  carroImagem.style.filter = `hue-rotate(120deg)`
}
}

function moverCarro(direcao) {
  if (direcao == "andar") {
    carro.dirigir(Number(andarInput.value))
    
  } else {
    carro.re(Number(reInput.value))
    
  }
}

botaoMover.addEventListener("click", () => moverCarro("andar"))
botaoRe.addEventListener("click", () => moverCarro("re"))
botaoBuzina.addEventListener("click", () => carro.buzina()) 
botaoCor.addEventListener("click", () => carro.mudarCor(corInput.value))
