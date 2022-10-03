const mysql = require("mysql2");
const Sequelize = require("sequelize");
const config = require("../config.json");

module.exports = db = {};

module.exports.initialize = initialize;

initialize();

async function initialize() {
  try {
    const host = config.database.host;
    const port = config.database.port;
    const user = config.database.user;
    const password = config.database.password;
    const database = config.database.database;

    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    const sequelize = new Sequelize(database, user, password, {
      port: port,
      host: host,
      dialect: "mysql",
      logging: false,
      timezone: "+05:30",
    });
    db.sequelize = sequelize;

    db.formDetails = require("../models/formData")(sequelize);
    db.ProductDetails = require("../models/productDetails")(sequelize);
    await sequelize.sync();
  } catch (error) {
    console.log(error);
  }
}
