const Aluno = require('../models/Aluno')
const Plano = require('../models/Plano')
const Matricula = require('../models/Matricula')

module.exports = {

  async store (req, res) {
    const { aluno_id, plano_id } = req.params
    const { status } = req.body
    
    const aluno = await Aluno.findByPk(aluno_id)
    const plano = await Plano.findByPk(plano_id)

    if(!aluno) {
      return res.status(400).json({ error: 'Aluno nao encontrado' })
    }

    if(!plano) {
      return res.status(400).json({ error: 'Plano nao encontrado' })
    }

    const matricula = await Matricula.create({ status, aluno_id, plano_id })

    return res.json(matricula)
  }
}