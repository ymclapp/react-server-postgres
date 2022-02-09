const db = require('../models');
const Product = db.product;
const Op = db.Sequelize.Op;

//Create and Save a new Product
exports.create = (request, response) => {
    //Validate request
    if(!request.body.title) {
        response.status(400).send({
            message:  'Content can not be empty!'
        });
        return;
    }

    //Create a Product
    const product = {
        title:  request.body.title,
        description:  request.body.description,
        image:  request.body.image,
        release_date:  request.body.release_date,
        type:  request.body.type,
        price:  request.body.price
    };

    //Save Product in the database
    Product.create(product)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message:
            err.message || 'Some error occurred while creating the product'
        });
    });
};

//Retrieve ALL Products from the database
exports.findAll = (request, response) => {
    const title = request.query.title;
    var condition = title ? {title:  { [Op.iLike]: `%${title}%`} } : null;

    Product.findAll({ where:  conditon })
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message:
            err.message || 'Some error occurred while retrieving products'
        });
    });
};

//Find one product with an id
exports.findOne = (request, response) => {
    const id = request.params.id;

    Product.findByPk(id)
    .then(data => {
        response.send(data);
    })
    .catch(err => {
        response.status(500).send({
            message:  'Error retrieving product with id=' + id
        });
    });
};

//Update a product by the id in the request
exports.update = (request, response) => {
    const id = request.params.id;

    Product.update(request.body, {
        where:  { id:  id }
    })
    .then(num => {
        if(num == 1) {
            response.send({
                message:  'Product was updated successfully'
            });
        } else {
            response.send({
                message:  `Cannot update product with ide=${id}.  Maybe product was not found or request.body is empty!`
            });
        }
    })
    .catch(err => {
        response.status(500).send({
            message:  'Error updating product with id=' + id
        });
    });
};

//Delete a  product with the specified id in the request
exports.delete = (request, response) => {
    const id = request.params.id;

    Product.destroy({
        where:  { id: id }
    })
    .then(num => {
        if(num == 1) {
            response.send({
                message:  'Product was deleted successfully!'
            });
        } else {
            response.send({
                message:  `Cannot delete product with id=${id}.  Maybe product was not found!`
            });
        }
    })
    .catch(err => {
        response.send(500).send({
            message:  'Could not delete product with id=' + id
        });
    });
};

//Delete all products from the database
exports.deleteAll = (request, response) => {
    Product.destroy({
        where:  {},
        truncate:  false
    })
    .then(nums => {
        response.send({
            message: `${nums} products were deleted successfully!`
        });
    })
    .catch(err => {
        response.status(500).send({
            message:
            err.message || 'Some error occurred while removing all products'
        });
    });
};

//Not using, but could be used for clearance items or for a specific year or something

// find all published Tutorial
// exports.findAllPublished = (request, response) => {
//     Tutorial.findAll({ where: { published: true } })
//       .then(data => {
//         response.send(data);
//       })
//       .catch(err => {
//         responsetatus(500).send({
//           message:
//             err.message || "Some error occurred while retrieving tutorials."
//         });
//       });
//   };
