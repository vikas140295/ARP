// "use strict";;

const express = require("express");
const controller = require("./user.controller");
const auth = require("../../../auth/auth.service");
const router = express.Router();


/*
 * new user sign-up
 */
router.post("/", controller.create);

router.get("/listSellers", controller.listSellers);

router.put(
  "/updatePassword",
  auth.isAuthenticated(),
  controller.changeMyPassword
);

/*
 * user manager, admin area
 */
// create a new user
router.post("/register", controller.registerUser);

router.get("/",  controller.index);

router.get("/:id", controller.byId);

router.put("/:id", controller.updateUser);

router.put(
  "/updatePassword/:id",
  controller.changePassword
);

// delete a user
router.delete("/:id", controller.destroy);

router.get('/reset', controller.reset);

router.post("/resetPassword", controller.resetPassword);

module.exports = router;
