module.exports = app => {
    const products = require('../controllers/product.controller');

    var router = require('express').Router();

    //Create a new product
    router.post('/', products.create);

    //Retrieve all products
    router.get('/', products.findAll);

    //Retrieve all published Tutorials - not using
    //router.get('/published', tutorials.findAllPublished);

    //Retrieve one product with id
    router.get('/:id', products.findOne);

    //Update a product with id
    router.put('/:id', products.update);

    //Delete a product with id
    router.delete('/:id', products.delete);

    //Delete all products
    router.delete('/', products.deleteAll);

    app.use('/api/products', router);
};