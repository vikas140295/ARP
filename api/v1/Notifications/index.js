const express = require("express");
const controller = require("./controller");
const auth = require("../../../auth/auth.service");
const router = express.Router();
const multer = require('multer');
const path = require('path');

router.get("/list/:type", auth.isAuthenticated(), controller.NotificationslistbyUser);

router.post("/create", auth.isAuthenticated(), controller.create);

router.put("/read/:type", auth.isAuthenticated(), controller.ReadAll);

module.exports = router;