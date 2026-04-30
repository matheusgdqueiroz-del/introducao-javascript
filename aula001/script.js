                                                                                                                        let idade = Number(prompt("Qual a sua idade?"))
let habilitado = prompt(`Você tem habilitação:
    1 - sim
    2 - não`) === "1"

if (idade >= 18 && habilitado) {
    alert("Pode entrar")
} else {
    alert("Não pode entrar")
}