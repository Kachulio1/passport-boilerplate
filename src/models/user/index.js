const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true }
});

// Model Class
const Model = mongoose.model("user", UserSchema);
module.exports = Model;
