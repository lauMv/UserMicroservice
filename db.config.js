const Sequelize = require("sequelize");

const userModel = require("./models/user");

const sequelize = new Sequelize("userDB", "postgres", "postgres", {
   host: "127.0.0.1",
   dialect: "postgres",
});

const User = userModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
   console.log("model send");
});

module.exports = {
   User,
};
