const {DataTypes,Sequelize} =  require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true,require:true },
        ProductName: { type: DataTypes.STRING },
        ProductType: { type: DataTypes.STRING },
        Category: { type: DataTypes.STRING },
        Avilable: { type: DataTypes.BOOLEAN, },
        Mobile: { type: DataTypes.BIGINT },
        Source: { type: DataTypes.STRING },
        createdAt: { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false },
        updatedAt: { type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), allowNull: false }
        };

    return sequelize.define("ProductDetails", attributes)
}
