'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('planos', { 
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
        descricao : {
          type: Sequelize.STRING
        },
        tipo_plano : {
          type: Sequelize.STRING,
          allowNull: false
        },
        valor_plano : {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
        },
        permite_reentrada : {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        valor_diaria : {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
        },
        permite_reentrada_diaria : {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        status : {
          type: Sequelize.BOOLEAN,
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
      return queryInterface.dropTable('planos');
  }
};
