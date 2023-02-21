var mongoose = require("mongoose");

export type IAuthor = {
  username: string;
  password: string;

}

var UserSchema = new mongoose.Schema({
  username: String, 
  password: String
});

module.exports = mongoose.model("User", UserSchema);