// "use strict";;

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: Schema.Types.String,
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    isDeleteable:{type:Boolean,default:true},
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model("Category", CategorySchema);
