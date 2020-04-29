const { Model, DataTypes } = require('sequelize')

class Plano extends Model {
  static init(connection) {
    super.init({
      nome: DataTypes.STRING,
      descricao: DataTypes.STRING,
      tipo_plano: DataTypes.STRING,
      valor_plano: DataTypes.DECIMAL(10, 2),
      permite_reentrada: DataTypes.BOOLEAN,
      valor_diaria: DataTypes.DECIMAL(10, 2),
      permite_reentrada_diaria: DataTypes.BOOLEAN,
      status: DataTypes.BOOLEAN
    }, {
      sequelize: connection
    })
  }

  static associate(models) {
    this.belongsToMany(models.Aluno, { foreignKey: 'plano_id', through: 'matriculas', as: 'matriculas' })
    this.hasMany(models.Matriculas, { foreignKey: 'plano_id', as: 'matriculas' })
  }
}

module.exports = Plano