const socketIOClient = require("socket.io-client");
const { validationError, handleError, handle404 } = require('../../../components/errors');
const Notifications = require('../Notifications/model');
const { response } = require("express");

const BASE_URL = 'http://localhost:5000/';
//Save Notifications
exports.create = (request, response) => {
    const NotificationData = {
        from: request.user._id,
        to: request.user._id,
        message: `<span>${request.body.message}</span>`,
    };
    const data = this.save(NotificationData);
    return response.status(201).json(data);
}

exports.save = (requestData) => {

    const socket = socketIOClient(BASE_URL);
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    console.log("messageSent", response);
    socket.emit("messageSent", response);

    requestData.isRead = false;
    Notifications.create(requestData, (error, data) => {
        if (error)
            console.log('error', error);
        return data;
    });

}


//Get list of All Notifications against specific user
exports.NotificationslistbyUser = (request, response) => {
    const type = parseInt(request.params.type);
    //let li = request.params.limit;
    let UserId = request.user._id;

    console.log("Limit", type);
    Notifications.find({ to: UserId }, (error, data) => {
        if (error) {
            return handle404(response, error);
        }
        var total = 0;
        Notifications.count({ to: UserId, isRead: false }, (error, count) => {
            if (error) {
                return handle404(response, error);
            }
            total = count;
            const NotificationList = {
                data,
                total
            }
            return response.status(200).json(NotificationList);
        });
    }).sort({ createdAt: -1 }).limit(type);
}

exports.ReadAll = (request, response) => {
    //const type = request.params.type;
    let UserId = request.user._id;
    const type = parseInt(request.params.type);
    Notifications.updateMany({ to: UserId }, { $set: { isRead: true } }, function (err, res) {
        if (err) {
            return handle404(response, error);
        }
        Notifications.find({ to: UserId }, (error, data) => {
            if (error) {
                return handle404(response, error);
            }
            var total = 0;
            Notifications.count({ to: UserId, isRead: false }, (error, count) => {
                if (error) {
                    return handle404(response, error);
                }
                total = count;
                const NotificationList = {
                    data,
                    total
                }
                return response.status(200).json(NotificationList);
            });
        }).sort({ createdAt: -1 }).limit(type);
    });
}
