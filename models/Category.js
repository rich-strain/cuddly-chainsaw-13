const { Model, DataTypes } = require('sequelize'); // Import Sequelize Library

const sequelize = require('../config/connection.js'); // Import the connection to the database

class Category extends Model {} // Initialize Category model from Sequelize model

// Define the columns in the Category table, including the id, category_name
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
