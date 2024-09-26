let alunos = [
    {nome: "Pedro", nota: 8},
    {nome: "Maria", nota: 7},
    {nome: "Claudio", nota: 5},
    {nome: "Ana", nota: 4}
]

const aprovados = alunos.filter(item => item.nota >= 6);

console.log(aprovados)