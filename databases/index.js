const { Sequelize } = require("sequelize");
const Thread = require("./models/threadModel");
const User = require("./models/userModel");

const sequelize = new Sequelize({
  logging: false,
  dialect: "sqlite",
  storage: "./databases/cache/data.sqlite",
});

sequelize.sync();

module.exports = { sequelize, Thread, User };