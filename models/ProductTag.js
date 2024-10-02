const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product', // Name of the target model
        key: 'id', // Key in the target model
      },
      allowNull: false, // Cannot be null
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag', // Name of the target model
        key: 'id', // Key in the target model
      },
      allowNull: false, // Cannot be null
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
