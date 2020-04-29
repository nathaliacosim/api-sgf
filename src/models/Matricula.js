const { Model, DataTypes } = require('sequelize')

class Matricula extends Model {
  static init(connection) {
    super.init({
      status: DataTypes.BOOLEAN
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id', as: 'aluno' })
    this.belongsTo(models.Plano, { foreignKey: 'plano_id', as: 'plano' })
  }
}

module.exports = Matricula