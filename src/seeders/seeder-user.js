"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@example.com",
        password: "123456",
        firstName: "HoiDanIT",
        lastName: "Eric",
        address: "USA",
        phonenumber: "12547852",
        gender: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppaCvNmLGEEALYaQNWjszpHc1eY8P12Jjrw&usqp=CAU",
        roleId: "kkk",
        positionId: "hhhh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
