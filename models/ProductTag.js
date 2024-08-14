const { Model, DataTypes } = require('sequelize'); // Import Sequelize Library

const sequelize = require('../config/connection'); // Import the connection to the database

class ProductTag extends Model {} // Initialize ProductTag model from Sequelize model

// Define the columns in the ProductTag table, including the id, product_id, and tag_id
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false,
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
