import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js";

const alunos = [
    {
        nome: "Filipe Alves",
        turma: "T18",
        idade: "35", 
    },
]

try {
    const response = await DatabaseAlunoMetodos.createTableAlunos()
    console.log(`Tabela Alunos: ${response}`)

    alunos.forEach(async aluno => {
        const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
    })
    console.log(`Alunos: cadastrados com sucesso!`)
} catch (e) {
    console.log(e.message)
}




