'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {cartID: "1", courseID: "1"}
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
      return queryInterface.bulkInsert('Cart_Details',data,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cart_Details", null, {});
  }
};
