const { Model, DataTypes } = require('sequelize')

class Aluno extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      data_nascimento: DataTypes.DATE, 
      sexo: DataTypes.STRING,
      cpf: DataTypes.STRING, 
      rg: DataTypes.STRING,
      email: DataTypes.STRING, 
      telefone: DataTypes.STRING, 
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Endereco, { foreignKey: 'aluno_id', as: 'enderecos' })
  }
}

module.exports = Aluno