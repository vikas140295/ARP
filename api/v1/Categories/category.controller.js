
const Category = require('../../../models').category;

const {
  validationError,
  handleError,
  handle404,
} = require("../../../components/errors");
// const chalk = require('chalk');

exports.create = (request, response) => {
  const newCategory = request.body;
  Category.create(newCategory)
  .then(role => response.status(201).send(role))
  .catch(error => response.status(400).send(error));
};

// exports.create = (request, response) => {
//   const newCategory = request.body;
//   Category.create(newCategory, (error, role) => {
//     if (error) return validationError(response, error);
//     return response.status(201).json(role);
//   });
// };

exports.listCategories = (request, response) => {
  Category.findAll({ }).then(users => response.status(200).send(users))
      .catch(error => {
        console.log(error);
        response.status(400).send(error)
      });
};

exports.byId = (request, response) => {
  const roleId = request.params.id;

  Category.findOne({ _id: roleId }, (error, data) => {
    if (error || !data._id) {
      return handle404(response, error);
    }
    return response.status(200).json(data);
  });
};

exports.remove = (req, res) => {
  // Category.findOneAndRemove({ _id: request.params.id }, (error, data) => {
  //   if (error || !data) {
  //     return handle404(response, error)
  //   }
  //   const back = {
  //     status: 200,
  //     message: 'Deleted Successfully'
  //   }
  //   return response.status(200).json(back);
  // });

  Category.findOne({
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

exports.updateCategory = (request, response) => {
  const roleInfo = request.body;
  Category.findOneAndUpdate({ _id: roleInfo.id }, roleInfo, (error, data) => {
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
