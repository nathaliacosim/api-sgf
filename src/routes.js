const express = require('express')
const PlanoController = require('./controllers/PlanoController')
const AlunoController = require('./controllers/AlunoController')
const EnderecoController = require('./controllers/EnderecoController')
const MatriculaController = require('./controllers/MatriculaController')

const routes = express.Router()

routes.get('/planos', PlanoController.index)
routes.post('/planos', PlanoController.store)

routes.get('/alunos', AlunoController.index)
routes.post('/alunos', AlunoController.store)

routes.get('/alunos/:aluno_id/enderecos', EnderecoController.index)
routes.post('/alunos/:aluno_id/enderecos', EnderecoController.store)

routes.post('/alunos/:aluno_id/:plano_id/matriculas', MatriculaController.store)

module.exports = routes