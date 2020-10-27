'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    cartID: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true,
    },
    updatedAt: DataTypes.DATE
  }, {});
  Cart.associate = function(models) {
    Cart.hasMany(models.Cart_Detail,{foreignKey:'cartID'});
    Cart.belongsTo(models.User,{foreignKey:'userID'});
  };
  return Cart;
};