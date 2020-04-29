const Plano = require('../models/Plano')

module.exports = {
  async index (req, res){
    const planos = await Plano.findAll()
    return res.json(planos)
  },

  async store (req, res) {
    const { nome, descricao, tipo_plano, valor_plano, permite_reentrada, valor_diaria, permite_reentrada_diaria, status } = req.body
    
    const plano = await Plano.create({ nome, descricao, tipo_plano, valor_plano, permite_reentrada, valor_diaria, permite_reentrada_diaria, status })

    return res.json(plano)
  }
}