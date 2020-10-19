//const Product = require("./product.model");
const Product = require('../../../models').products;
const {
  validationError,
  handleError,
  handle404,
} = require("../../../components/errors");
var path = require("path");
var fs = require("fs");
const { split } = require("lodash");
const getFilePaths = (files, paths) => {
  files.forEach(({ destination, filename }) => {
    // let dest = destination.split("/");
    // let filePath = `./${dest[2]}/${dest[3]}/${filename}`;
    filePath=destination;
    //console.log("destination", `/${dest[1]}/${dest[2]}`);
    paths.push(filePath);
  });
  return paths;
};

const deleteImagesFunc = (filePathName) => {
  let getfiledir = filePathName.split(".");
  let filePath = `./server${getfiledir[1]}.${getfiledir[2]}`;
  console.log("filPath", filePath);
  fs.access(filePath, fs.F_OK, (err) => {
    if (err) {
      console.error(err);
      return;
    } else {
      fs.unlinkSync(filePath);
    }
    //file exists
  });
};

exports.create = (req, res) => {
  const newProduct = req.body;
  Product.create(newProduct)
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
}

exports.list = (req, res) => {
  // const newProduct = req.body;
  Product.findAll({
    where:{isDeleted:false}
  })
  .then(products => res.status(200).send(products))
  .catch(error => {
    console.log(error);
    res.status(400).send(error)
  });
}

exports.listByFilter = (req, res) => {
  const categories = req.body.categories;
  const whereClause = {isDeleted: false};
  if (categories.length) {
    whereClause.categoryId = categories;
  }
  Product.findAll({
    where: whereClause
  })
      .then(products => res.status(200).send(products))
      .catch(error => {
        console.log(error);
        res.status(400).send(error)
      });
}



// Creates a new Product in the DB
// exports.create = (req, res) => {
//   const newProduct = req.body;
//   if (req.files) {
//     newProduct.productImages = [];
//     newProduct.productImages = getFilePaths(
//       req.files,
//       newProduct.productImages
//     );
//   }

//   Product.create(newProduct, (err, data) => {
//     if (err) return validationError(res, err);
//     return res.status(201).json(data);
//   });
// };

// Update Product in the DB
// exports.update = (req, res) => {
//   var imagesPath = [];
//   productObj = req.body;
//   console.log(productObj.deleteImages);
//   if (req.files) {
//     var images = productObj.productImages
//       ? productObj.productImages.split(",")
//       : []; //Get Images List if exist
//     var deleteImages = productObj.deleteImages
//       ? productObj.deleteImages.split(",")
//       : []; //Get Delete Images List if exist
//     images.forEach((image) => {
//       imagesPath.push(image); //Get Path of Existing Images/files
//     });

//     deleteImages.forEach((image) => {
//       deleteImagesFunc(image); //Delete Images/files from directory
//     });

//     productObj.productImages = getFilePaths(req.files, imagesPath); //Get Images Path of newlly inserted Iamges
//   } else {
//     productObj.deleteImages.forEach((image) => {
//       deleteImagesFunc(image);
//     });
//   }

//   Product.update({where :{id:productObj.id}}, productObj, (err, blog) => {
//     if (err) return validationError(res, err);
//     Product.findOne({ _id: req.params.id }).then((category) => {
//       return res.status(201).json(category);
//     });
//   });
// };
exports.update = (req, res) => {
  productObj = req.body;
console.log(productObj);
  Product.
  findOne({where :{id:productObj._id}})
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return product.update(productObj)
        .then(() => res.status(200).send(product))  // Send back the updated todo.
        .catch((error) => { console.log("Error",error);
          res.status(400).send(error)});
    })
    .catch((error) =>{console.log("Error",error); res.status(400).send(error)});
}


exports.listProducts = (request, response) => {
  Product.find({ isDeleted: false }, (error, products) => {
    if (error) {
      return handleError(response, error);
    }
    return response.status(200).json(products);
  });
};

exports.byId = (request, res) => {
  const productId = request.params.id;
console.log("Product Id",productId);
Product.findOne({where :{id:productId}})
    .then(product => {
      if (!product) {
        return res.status(404).send({
          message: 'Todo Not Found',
        });
      }
      return res.status(200).send(product);
    })
    .catch(error => res.status(400).send(error));
  // Product.findById(productId, (error, data) => {
  //   if (error || !data.id) {
  //     return handle404(response, error);
  //   }
  //   console.log("data",data);
  //   return response.status(200).json(data);
  // });
};

exports.remove = (request, response) => {
  console.log(request.params.id);
  Product.update({isDeleted:true},{where :{id: request.params.id}})
  .then((product) => response.status(200).send(product))  // Send back the updated todo.
  .catch((error) => { console.log("Error",error);
  response.status(400).send(error)});
 
 
  // Product.findOne({
  //   _id: request.params.id,
  // }).then((product) => {
  //   product.isDeleted = true;
  //   product.save((err) => {
  //     if (err) console.log("Error", err);
  //     const back = {
  //       status: 200,
  //       message: "Deleted Successfully",
  //     };
  //     return response.status(200).json(back);
  //   });
  // });
};
