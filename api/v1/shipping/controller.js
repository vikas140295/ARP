const stripe = require("stripe")(
  "sk_test_51H6Xh6Ld2RIXzrQcxhS1HS2bjNF9orwzGDazV2Bx4HsvtadfANLX3JMmArg20RqS4QdsUio4nb0K8AVfWrZgbKQ400FVTSyXt9"
);
const Shipping = require("../../../models").shipping;
const {
  validationError,
  handleError,
  handle404,
} = require("../../../components/errors");
//const Order = require("../Order/model");
const Order = require("../../../models").order;
const modules=require("../../../models");
const OrdersDetail = require("../../../models").ordersdetail;
//const OrderDetail = require("../OrderDetail/model");
const Notification = require("../Notifications/controller");
const Users = require("../../../models").users;
const SentEmail = require("../sentEmails/sentEmails.controller");

exports.createCustomer = async (req, res) => {
  try {
    //let UserId = req.user._id;
    const { source, email } = req.body;
    const customer = await stripe.customers.create({
      source,
      email,
    });
    if (!customer) throw new Error("Customer unsuccessful");
    res.status(200).json({
      message: "Customer Created successfully successfully",
      customer,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getShippingInfo = (req, res) => {
  let UserId = req.params.id;
  console.log(UserId);
  Shipping.findOne({where:{ userId: UserId }},).then ((data) => {
    console.log(data);
    return res.status(200).json(data);
  });
};

exports.saveShipping = (req, res) => {
  //console.log(req.user.id);
  req.body.userId = req.params.id;
  Shipping.findOne({
    where:{userId: req.params.id}
  }).then((shipping) => {
    if (shipping) {
      shipping.update(req.body)
        .then(() => res.status(200).json({
          message: "Record updated successfully successfully",
        }))  // Send back the updated todo.
        .catch((error) => { console.log("Error",error);
          res.status(400).send(error)});
        } 
        else {
          Shipping.create(req.body)
      .then(shipping => res.status(201).send(shipping))
      .catch(error => res.status(400).send(error)); 
    }
  });
};

exports.postCharge = async (req, res) => {
  console.log(req.body);
  try {
    let UserId = req.params.id;
    await Shipping.findOne({
      where:{userId: UserId},
    }).then(async (shipping) => {
      const { amount } = req.body;
      customer = customer = shipping.customer;
      const charge = await stripe.charges.create({
        amount,
        currency: "USD",
        customer,
      });

      if (!charge) throw new Error("charge unsuccessful");
      res.status(200).json({
        message: "charge posted successfully",
        charge,
      });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  //console.log("Modules",modules);
  const bodyOrder = req.body.Order;
  bodyOrder.status = "Pending";
  const bodyOrderDetail = req.body.OrderDetail;
  bodyOrder.customerId = req.params.id;
  bodyOrder.totalProducts = req.body.OrderDetail.length;
  bodyOrder.orderDate=new Date();
  bodyOrder.shipeDate=new Date();
  bodyOrder.requireDate=new Date();
  Order.create(bodyOrder).then((order) => {
     {
      bodyOrderDetail.forEach((element) => {
        element.orderId = order.id;
        element.orderDate=new Date();
        console.log(element);
        OrdersDetail.create(element).then (orderDetail => {
          if (error) {
            return validationError(response, error);
          } else {
          }
        });
      });

      // const NotificationData = {
      //   from: req.user._id,
      //   to: req.user._id,
      //   message: `<span>Dear Customer your Order <a href='/admin/ordersdetail/${order._id}'>${order._id}</a> has been placed successfully</span>`,
      // };

      // Users.find({ _id: req.user._id }, (error, list) => {
      //   var emails = list.map((Obj) => {
      //     var emailsList = [Obj.email];
      //     //const token = crypto.randomBytes(20).toString('hex');
      //     console.log(emailsList);
      //     let Content = `<span>Dear Customer your Order <a href='http://localhost:3001/admin/ordersdetail/${order._id}'>${order._id}</a> has been placed successfully</span>`;
      //     SentEmail.sendEmail(emailsList, Content, "HTML", "New Order");
      //   });
      // });

      // Notification.save(NotificationData);
      // Users.find({ role: "admin" }, (error, list) => {
      //   list.map((Obj) => {
      //     const adminNotificationData = {
      //       from: Obj._id,
      //       to: Obj._id,
      //       message: `<span>New Order <a href='/admin/ordersdetail/${order._id}'>${order._id}</a> has been placed</span>`,
      //     };
      //     Notification.save(adminNotificationData);
      //   });
      // });
    }
  });
  res.status(200).json({
    message: "Record saved successfully",
  });
};

exports.createCoupon = async (req, res) => {
  try {
    //let UserId = req.user._id;
    const coupon = await stripe.coupons.create({
      percent_off: 25,
      duration: "repeating",
      duration_in_months: 3,
    });
    if (!coupon) throw new Error("coupon creation was unsuccessful");
    res.status(200).json({
      message: "coupon Created successfully successfully",
      coupon,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCoupon = async (req, res) => {
  try {
    //let UserId = req.user._id;
    const coupon = await stripe.coupons.retrieve("FqjAjcg1");
    if (!coupon) throw new Error("unsuccessful");
    res.status(200).json(coupon);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
};
