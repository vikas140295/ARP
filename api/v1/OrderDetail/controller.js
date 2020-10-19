const { validationError, handleError, handle404 } = require('../../../components/errors');
const Order = require('../../../models').orders;
const OrderDetail = require('../OrderDetail/model');
const pool=require('../../../db');

const mongoose = require("mongoose");

exports.OrderDetail = async (request, response) => {
    const newTodo= await pool.query('SELECT ordersdetails."price",ordersdetails."total",ordersdetails."quantity",ordersdetails."discount",products."title"  FROM ordersdetails INNER JOIN products ON ordersdetails."prodductId"=products.id where ordersdetails."orderId"=$1',[request.params.id]);
    response.status(200).json(newTodo.rows);
    // OrderDetail.aggregate([
    //     { $match: { "orderId": mongoose.Types.ObjectId(request.params.id) } },
    //     {
    //         $lookup:
    //         {
    //             from: "products",
    //             localField: "prodductId",
    //             foreignField: "_id",
    //             as: "product"
    //         }
    //     }
    // ], (err, order) => {
    //     if (err) return validationError(response, err);
    //     return response.status(201).json(order);
    // })
}