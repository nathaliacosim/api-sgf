const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Plano = require('../models/Plano')
const Aluno = require('../models/Aluno')
const Endereco = require('../models/Endereco')
const Matricula = require('../models/Matricula')

const connection = new Sequelize(dbConfig)

Plano.init(connection)
Aluno.init(connection)
Endereco.init(connection)
Matricula.init(connection)

Aluno.associate(connection.models)
Endereco.associate(connection.models)
Matricula.associate(connection.models)

module.exports = connection