'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart_Detail = sequelize.define('Cart_Detail', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    updatedAt: DataTypes.DATE
  }, {});
  Cart_Detail.associate = function(models) {
    Cart_Detail.belongsTo(models.Cart,{foreignKey:'cartID'});
    Cart_Detail.belongsTo(models.Course,{foreignKey:'courseID'});
  };
  return Cart_Detail;
};