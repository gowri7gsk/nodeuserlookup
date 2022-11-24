const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  username: String,
  password: String,
  phonenumber:String,
  gmail:String
});

const pductSchema = new mongoose.Schema({
  job: String,
  code: String
});

const produSchema = new mongoose.Schema({
  user: String,
  title: String
});
const ajobs = mongoose.model("jobs", pductSchema);
const auser = mongoose.model("users", productSchema);
const auserjobs = mongoose.model("userjobs", produSchema);
//module.exports = mongoose.model("ware1", productSchema);
module.exports = {auser,ajobs,auserjobs}