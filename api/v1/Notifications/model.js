const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const NotificationsSchema = new mongoose.Schema({
    from: { type: Schema.Types.ObjectId },
    to: { type: Schema.Types.ObjectId },
    message: String,
    isRead: Boolean,
    createdAt: { type: Date, default: Date.now },
    isDeleted:{type:Boolean,default:false}
});

module.exports = mongoose.model('Notifications', NotificationsSchema);