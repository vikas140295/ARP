//const Role = require("./roles.model");
const Role = require('../../../models').roles;

const {
  validationError,
  handleError,
  handle404,
} = require("../../../components/errors");
// const chalk = require('chalk');

exports.create = (request, response) => {
  const newRole = request.body;
  Role.create(newRole)
  .then(role => response.status(201).send(role))
  .catch(error => response.status(400).send(error));
};

// exports.create = (request, response) => {
//   const newRole = request.body;
//   Role.create(newRole, (error, role) => {
//     if (error) return validationError(response, error);
//     return response.status(201).json(role);
//   });
// };

exports.listRoles = (request, response) => {
  Role.find({ isDeleted: false }, (error, roles) => {
    if (error) {
      return handleError(response, error);
    }
    return response.status(200).json(roles);
  });
};

exports.byId = (request, response) => {
  const roleId = request.params.id;

  Role.findOne({ _id: roleId }, (error, data) => {
    if (error || !data._id) {
      return handle404(response, error);
    }
    return response.status(200).json(data);
  });
};

exports.remove = (req, res) => {
  // Role.findOneAndRemove({ _id: request.params.id }, (error, data) => {
  //   if (error || !data) {
  //     return handle404(response, error)
  //   }
  //   const back = {
  //     status: 200,
  //     message: 'Deleted Successfully'
  //   }
  //   return response.status(200).json(back);
  // });

  Role.findOne({
    _id: req.params.id,
  }).then((item) => {
    item.isDeleted = true;
    item.save((err) => {
      if (err) console.log("Error", err);
      const back = {
        status: 200,
        message: "Deleted Successfully",
      };
      return res.status(200).json(back);
    });
  });
};

exports.updateRole = (request, response) => {
  const roleInfo = request.body;
  Role.findOneAndUpdate({ _id: roleInfo.id }, roleInfo, (error, data) => {
    if (error || !data) {
      return handle404(response, error);
    }
    const back = {
      status: 200,
      message: "Updated Successfully",
    };
    return response.status(200).json(back);
  });
};
