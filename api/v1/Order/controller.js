const {validationError,handleError,handle404,} = require("../../../components/errors");
//const Order = require("../Order/model");
const Order = require("../../../models").order;
//const OrderDetail = require("../OrderDetail/model");
const Notification = require("../Notifications/controller");

exports.OrderList = (request, response) => {
  //let UserId = request.user._id;
  // Order.find({ customerId: UserId }, (error, data) => {
  //   if (error) {
  //     return handleError(response, error);
  //   }
  //   return response.status(200).json(data);
  // });
  Order.findAll({ }).then (data => {
    return response.status(200).json(data);
  });
};

exports.UpdateOrder = (request, response) => {
  Order.findOne({
    _id: request.body.Id,
  }).then((order) => {
    if (order != null) {
      order.status = request.body.status;
      order.save((err) => {
        if (err) console.log("Error", err);
        const NotificationData = {
          from: order.customerId,
          to: order.customerId,
          message: `<span>Dear Customer your Order <a href='/admin/ordersdetail/${order._id}'>${order._id}</a> has been placed successfully</span>`,
        };
        Notification.save(NotificationData);
        const back = {
          message: "Order updated successfully",
        };
        return response.status(200).json(back);
      });
    }
  });
};

exports.OrderListAll = (request, response) => {
  try {
    Order.find({
      // "$expr":
      //     { "$eq": [{ "$month": "$orderDate" }, 9], "$eq": [{ "$year": "$orderDate" }, 2020] }
    })
      .sort({ _id: -1 })
      .exec((error, data) => {
        if (error) {
          return handleError(response, error);
        }
        return response.status(200).json(data);
      });
  } catch (ex) {
    return ex;
  }
};

exports.OrdersByDate = (req, res) => {
  Order.aggregate([
    {
      $redact: {
        $cond: [
          {
            $eq: [{ $month: "$orderDate" }, 9],
            $eq: [{ $year: "$orderDate" }, 2020],
          },
          "$$KEEP",
          "$$PRUNE",
        ],
      },
    },
    {
      $group: {
        _id: {
          date: { $dateToString: { format: "%m/%d", date: "$orderDate" } },
          pair: "$pair",
        },
        total: { $sum: "$total" },
      },
    },
    { $project: { date: "$_id.date", _id: 0, total: 1 } },
    { $sort: { date: 1 } },
  ]).then((values) => res.json(values));
};

exports.OrdersCountByStatus = (req, res) => {
  let date = req.body.date;
  Order.aggregate([
    {
      $group: {
        _id: "$status",
        orders: { $sum: 1 },
      },
    },
    { $project: { name: "$_id", _id: 0, orders: 1 } },
  ]).then((values) => res.json(values));
};

exports.RecentDepositsAmount = (req, res) => {
  var d = new Date();
  var currentDate = new Date(
    Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
  );

  //var currentDate = new Date();
  //currentDate.setDate(currentDate.getDate() - 1);
  console.log("CurrentDate", currentDate);
  var nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 1);
  console.log("Next Date", nextDate);
  Order.aggregate([
    {
      $match: {
        orderDate: {
          $gte: currentDate,
          $lt: nextDate,
        },
      },
    },
    {
      $group: {
        _id: null,
        total: { $sum: "$total" },
      },
    },
    { $project: { recentDeposits: "$total", _id: 0 } },
  ]).exec((error, data) => {
    if (error) {
      return handleError(res, error);
    }
    console.log(data);
    if (data[0]) {
      return res.status(200).json({ recentDeposits: data[0].recentDeposits });
    } else {
      return res.status(200).json({ recentDeposits: 0 });
    }
  });
};
