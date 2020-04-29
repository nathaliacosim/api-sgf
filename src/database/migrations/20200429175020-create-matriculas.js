'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('matriculas', { 
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
        plano_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'planos', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
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
      return queryInterface.dropTable('matriculas');
  }
};
