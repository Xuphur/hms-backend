var mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String, lowercase: true
  },

  userName: {
    type: String
  },

  password: {
    type: String
  },

  mobile: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
