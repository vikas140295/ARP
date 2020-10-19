const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const ShippingSchema = new Schema({
    contactInformation: { email: String },
    shippingAddress: {
        firstName: String,
        lastName: String,
        address: String,
        appartment: String,
        country: String,
        state: String,
        zipCode: String,
    },
    shippingMethod: String,
    customer: String,
    userId: String,
    created_date: {
        type: Date,
        default: Date.now
    },
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model("Shipping", ShippingSchema);
