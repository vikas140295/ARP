const express = require("express");
const controller = require("./controller");
const auth = require("../../../auth/auth.service");
const router = express.Router();
const multer = require('multer');
const path = require('path');

router.get("/list/:id", controller.OrderDetail);

module.exports = router;