const Aluno = require('../models/Aluno')

module.exports = {
  async index (req, res){
    const alunos = await Aluno.findAll()
    return res.json(alunos)
  },

  async store (req, res) {
    const { nome, data_nascimento, sexo, cpf, rg, email, telefone } = req.body
    
    const aluno = await Aluno.create({ nome, data_nascimento, sexo, cpf, rg, email, telefone })

    return res.json(aluno)
  }
}