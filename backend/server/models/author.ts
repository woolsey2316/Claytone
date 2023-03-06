var mongoose = require("mongoose");

export type IUser = {
  username: string;
  password: string;

}

var UserSchema = new mongoose.Schema({
  username: String, 
  password: String
});

module.exports = mongoose.model("User", UserSchema);