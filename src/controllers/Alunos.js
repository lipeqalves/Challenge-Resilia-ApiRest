import AlunoModel from "../models/AlunoModel.js"
import DatabaseAlunoMetodos from "../DAO/DatabaseAlunoMetodos.js"
import ValidacoesServices from "../services/ValidacoesServices.js"
class Alunos {
    static rotas(app) {
        app.get("/", (req, res) => {
            try {
                res.status(200).json({ msg: "Bem Vindo!!!!" })
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })
        app.get("/alunos", async (req, res) => {
            try {
                const response = await DatabaseAlunoMetodos.listarAlunos()
                res.status(200).json(response)
            } catch (e) {
                res.status(400).json({ error: true, msg: e.message })
            }
        })
        app.post("/alunos", async (req, res) => {
            try {
                const validaAluno = ValidacoesServices.validaNome(...Object.values(req.body))
                if (validaAluno) {
                    const aluno = new AlunoModel(...Object.values(req.body))
                    const response = await DatabaseAlunoMetodos.adicionaAluno(aluno)
                    res.status(201).json(response)
                } else {
                    const validaNome = ValidacoesServices.validaNome(req.body.nome)
                    if (!validaNome) {
                        throw new Error(`Revise sua requisição, nome do aluno ${req.body.nome} inválido`)
                    } 
                }
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
        app.delete("/alunos/:id", async (req, res) => {
            try {
                const aluno = await DatabaseAlunoMetodos.listarAlunosPorId(req.params.id)
                if (!aluno) {
                    throw new Error(`Aluno não encontrado com esse Id ${req.params.id}`)
                }
                const response = await DatabaseAlunoMetodos.excluirAluno(req.params.id)
                res.status(201).json(response)
            } catch (e) {
                res.status(400).json({ Error: true, msg: e.message })
            }
        })
    }
}
export default Alunos