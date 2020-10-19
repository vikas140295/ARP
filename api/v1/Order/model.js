const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const OrderSchema = new mongoose.Schema({
    customerId: { type: Schema.Types.ObjectId },
    orderNumber: String,
    price: { type: Number, required: true, default: 0 },
    salesTax: { type: Number, required: true, default: 0 },
    shippingPrice: { type: Number, required: true, default: 0 },
    total: { type: Number, required: true, default: 0 },
    totalProducts: Number,
    status: String,
    orderDate: { type: Date, default: Date.now },
    shipeDate: { type: Date, default: Date.now },
    requireDate: { type: Date, default: Date.now },
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model('Order', OrderSchema);