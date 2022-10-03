
const { DataTypes, Sequelize } = require('sequelize');

module.exports = model;

function model(sequelize) {
  const attributes = {
        Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,require:true },
        UserName: { type: DataTypes.STRING },
        UserType: { type: DataTypes.STRING },
        Password: { type: DataTypes.STRING },
        Email: { type: DataTypes.STRING, },
        Mobile: { type: DataTypes.BIGINT },
        Source: { type: DataTypes.STRING },
        createdBy: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        createdAt: { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updatedBy: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        updatedAt: { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false }
    

  };

  return sequelize.define('formDetails', attributes);
}
