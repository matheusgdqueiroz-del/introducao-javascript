
let aluno = {
    nome : "Matheus",
    idade : 26,
    curso : "ADS",
    materias : ["matematica", "português"],
    endereco : {
        cidade : "São Paulo",
        rua : "Padre José Natuzzi",
        numero : 777
    }
}

console.log(aluno)
console.log(aluno["nome"])

aluno.status = true

console.log(aluno)

delete aluno.idade

console.log(aluno.endereco.numero)