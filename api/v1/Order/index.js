const express = require("express");
const controller = require("./controller");
const auth = require("../../../auth/auth.service");
const router = express.Router();
const multer = require('multer');
const path = require('path');

//router.get("/list", auth.isAuthenticated(), controller.OrderList);
router.get("/list", controller.OrderList);
router.get("/listByDate", auth.isAuthenticated(), controller.OrdersByDate);
router.get("/listAll", auth.isAuthenticated(), controller.OrderListAll);
router.post("/countByStatus", auth.isAuthenticated(), controller.OrdersCountByStatus);
router.get("/recentDepositsAmount", auth.isAuthenticated(), controller.RecentDepositsAmount);
router.put("/updateOrder", auth.isAuthenticated(), controller.UpdateOrder);


module.exports = router;
