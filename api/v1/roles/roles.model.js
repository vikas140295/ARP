// "use strict";;

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const RolesSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
    permissions:[Schema.Types.String],
    created_date: {
        type: Date,
        default: Date.now
    },
    isDeleteable:{type:Boolean,default:true},
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model("Roles", RolesSchema);
