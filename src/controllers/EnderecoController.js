const Aluno = require('../models/Aluno')
const Endereco = require('../models/Endereco')

module.exports = {
  async index (req, res){
    const { aluno_id } = req.params

    const aluno = await Aluno.findByPk(aluno_id, {
      include: { association: 'enderecos' }
    })

    //const endereco = await Endereco.findAll({ where: { aluno_id } })
    return res.json(aluno.enderecos)
  },

  async store (req, res) {
    const { aluno_id } = req.params
    const { endereco_cep, endereco_logradouro,endereco_numero, endereco_bairro, endereco_cidade, endereco_estado } = req.body
    
    const aluno = await Aluno.findByPk(aluno_id)

    if(!aluno) {
      return res.status(400).json({ error: 'Aluno nao encontrado' })
    }

    const endereco = await Endereco.create({ endereco_cep, endereco_logradouro,endereco_numero, endereco_bairro, endereco_cidade, endereco_estado, aluno_id })

    return res.json(endereco)
  }
}