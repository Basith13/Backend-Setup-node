const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("config");

const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use("/", routes);

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server Started on  ${port}`);
});

// DB Connection

const database = config.get("dbURL");

mongoose
  .connect(database, {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

module.exports = app;
