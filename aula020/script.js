const divListaAluno = document.querySelector("#lista-alunos")
let alunos = [
    {
        nome: "Matheus",
        idade: 27
    },
    {
        nome: "Angeline",
        idade: 21
    },
    {
        nome: "Nanci",
        idade: 46
    },
    {
        nome: "Mari",
        idade: 43
    },
    {
        nome: "Lucas",
        idade: 19
    },
    {
        nome: "Juliana",
        idade: 24
    },
    {
        nome: "Rafael",
        idade: 30
    },
    {
        nome: "Camila",
        idade: 22
    },
    {
        nome: "Bruno",
        idade: 28
    },
    {
        nome: "Fernanda",
        idade: 26
    },
    {
        nome: "Gustavo",
        idade: 31
    },
    {
        nome: "Patrícia",
        idade: 29
    },
    {
        nome: "Diego",
        idade: 33
    },
    {
        nome: "Amanda",
        idade: 20
    },
    {
        nome: "Thiago",
        idade: 35
    },
    {
        nome: "Larissa",
        idade: 23
    },
    {
        nome: "Pedro",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 27
    },
    {
        nome: "Vinícius",
        idade: 32
    },
    {
        nome: "Carla",
        idade: 40
    },
    {
        nome: "Eduardo",
        idade: 38
    },
    {
        nome: "Isabela",
        idade: 25
    },
    {
        nome: "Rodrigo",
        idade: 41
    },
    {
        nome: "Tatiane",
        idade: 36
    },
    {
        nome: "Felipe",
        idade: 28
    },
    {
        nome: "Sabrina",
        idade: 22
    },
    {
        nome: "Leonardo",
        idade: 34
    },
    {
        nome: "Renata",
        idade: 37
    },
    {
        nome: "André",
        idade: 45
    },
    {
        nome: "Bianca",
        idade: 23
    }
]

divListaAluno.innerHTML = alunos.map(aluno => {
    return `<li>${aluno.nome} - ${aluno.idade} anos</li>`
}).join("")

