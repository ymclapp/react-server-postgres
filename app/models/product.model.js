module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        title:  {
            type:  Sequelize.STRING
        },
        description:  {
            type:  Sequelize.STRING
        },
        image:  {
            type:  Sequelize.BLOB
        },
        release_date:  {
            type:  Sequelize.DATEONLY
        },
        type:  {
            type:  Sequelize.STRING
        },
        price:  {
            type:  Sequelize.DECIMAL(10, 2)
        }
    });
    return Product;
};



