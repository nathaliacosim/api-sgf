'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('enderecos', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        aluno_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'alunos', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        endereco_cep : {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco_logradouro : {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco_numero : {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        endereco_bairro : {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco_cidade : {
          type: Sequelize.STRING,
          allowNull: false
        },
        endereco_estado : {
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
      return queryInterface.dropTable('enderecos');
  }
};
