let botaoMudaTexto = document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#titulo")

function mudaTexto() {
    if (titulo.innerHTML == "Este é o titulo") {
        titulo.innerHTML = "Matheus"
    } else {
        titulo.innerHTML = "Este é o titulo"
    }
}

botaoMudaTexto.addEventListener("click", mudaTexto)

