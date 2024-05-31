// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-project",
//   password: "hesham",
// });

// module.exports = pool.promise();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-project", "root", "hesham", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
