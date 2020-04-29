'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('alunos', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome : {
          type: Sequelize.STRING,
          allowNull: false
        },
        data_nascimento : {
          type: Sequelize.DATE,
          allowNull: false
        },
        sexo : {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf : {
          type: Sequelize.STRING,
          allowNull: false
        },
        rg : {
          type: Sequelize.STRING,
          allowNull: false
        },
        email : {
          type: Sequelize.STRING,
          allowNull: false
        },
        telefone : {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('alunos');
  }
};
