const mongoose = require("mongoose");
const Schema = mongoose.Schema;// Create Schema
const UserSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },


//new fields

  username: {
    type: String,
    required: true
  },
  normalised_username: {
    type: String
  },
  normalised_email: {
    type: String
  },
  password_hash: {
    type: String
  },
  security_stamp: {
    type: String
  },
  concurrency_stamp: {
    type: String
  },
  phone_number: {
    type: String,
    required: true
  },
  phone_number_confirmed: {
    type: Boolean,
    default: false
  },
  two_factor_enabled: {
    type: Boolean
  },
  lockoutend: {
    type: Boolean
  },
  lockoutend_enabled: {
    type: Boolean
  },
  access_fail_count: {
    type: Number
  },


  primary_role: {
    type: Boolean,
    required: true
  },


  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }

  // end new fields



});

module.exports = User = mongoose.model("users", UserSchema);
