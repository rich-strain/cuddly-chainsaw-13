const { Model, DataTypes } = require('sequelize'); // Import Sequelize Library

const sequelize = require('../config/connection.js'); // Import the connection to the database

class Tag extends Model {} // Initialize Tag model from Sequelize model

// Define the columns in the Tag table, including the id, tag_name
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
