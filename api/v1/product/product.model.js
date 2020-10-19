const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ProductSchema = new mongoose.Schema({
  title: {type: String, required:true, allowNull: false},
  price: {type:Number, required: true, default:0},
  description: String,
  productImages:[String],
  freeVersion:Boolean,
  isDeleted:{type:Boolean,default:false},
  createdAt:{type: Date, default: Date.now},
  updatedAt:{type: Date, default: Date.now}

});

module.exports = mongoose.model('Product', ProductSchema);