const express = require("express");
const controller = require("./category.controller");
const auth = require("../../../auth/auth.service");
const router = express.Router();

router.post("/", controller.create);

router.get("/", controller.listCategories);

router.get("/:id", controller.byId);

router.delete("/:id", controller.remove);

router.put("/", controller.updateCategory);


module.exports = router;
