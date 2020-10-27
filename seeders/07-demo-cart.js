'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      {userID: "1"}
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
      return queryInterface.bulkInsert('Carts',data,{});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Carts", null, {});
  }
};
