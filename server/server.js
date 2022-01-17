const express = require("express");
const app = express();
const Sequelize = require("sequelize");
require("dotenv").config();
const port = process.env.PORT;
const { DB_HOST, DATABASE, DB_PORT, DB_USERNAME, DB_PASSWORD } = process.env;
const db = {};

const sequelize = new Sequelize(DATABASE, DB_USERNAME, DB_PASSWORD, {
  dialect: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  define: { timestamps: false },
});

mytable = require("./model.js")(sequelize, Sequelize);

app.get("/", (req, res) => {
  mytable
    .findAll({})
    .then((data) => {
      console.log("hi");

      res.send(data);
    })
    .catch((err) => {
      console.log("error in get /");
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
  //res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
