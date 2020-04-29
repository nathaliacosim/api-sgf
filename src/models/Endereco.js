const { Model, DataTypes } = require('sequelize')

class Endereco extends Model {
  static init(connection) {
    super.init({
      endereco_cep: DataTypes.STRING,
      endereco_logradouro: DataTypes.STRING,
      endereco_numero: DataTypes.INTEGER,
      endereco_bairro: DataTypes.STRING, 
      endereco_cidade: DataTypes.STRING, 
      endereco_estado: DataTypes.STRING
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' })
  }
}

module.exports = Endereco