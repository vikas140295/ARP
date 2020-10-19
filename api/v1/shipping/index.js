const express = require("express");
const router = express.Router();
const controller = require("./controller");
const auth = require("../../../auth/auth.service");

router.post('/charge/:id', controller.postCharge);
//router.post('/customer', auth.isAuthenticated(), controller.createCustomer);
router.post('/customer/:id', controller.createCustomer);
//router.get('/shippingbyid', auth.isAuthenticated(), controller.getShippingInfo);
router.get('/shippingbyid/:id', controller.getShippingInfo);
//router.post('/saveShipping', auth.isAuthenticated(), controller.saveShipping);
router.post('/saveShipping/:id', controller.saveShipping);
//router.post('/createOrder', auth.isAuthenticated(), controller.createOrder);
router.post('/createOrder/:id', controller.createOrder);
router.post('/createCoupon', controller.createCoupon);
router.get('/getCoupon', controller.getCoupon);
module.exports = router;
