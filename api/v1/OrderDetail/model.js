const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderDetailSchema = new mongoose.Schema({
    orderId: { type: Schema.Types.ObjectId },
    prodductId: { type: Schema.Types.ObjectId },
    orderNumber: String,
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);