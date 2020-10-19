// "use strict";;

var express = require("express");
var passport = require("passport");
var config = require("../config/environment");
var User = require("../models").users;
var Role = require("../models").roles;

// var User = require("../api/v1/user/user.model");
// var Role = require("../api/v1/roles/roles.model");

// Passport Configuration
require("./local/passport").setup(User,Role, config);

var router = express.Router();
router.use("/", require("./local"));

module.exports = router;
