const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

exports.BOOKING_DATA = {
  firstname: "Alfarau",
  lastname: "AlA",
  price: 6661,
  username: process.env.USERNAME1,
  password: process.env.PASSWORD,
};
