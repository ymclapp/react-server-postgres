module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define('product', {
        title:  {
            type:  Sequelize.STRING(500)
        },
        description:  {
            type:  Sequelize.STRING(1000)
        },
        image:  {
            type:  Sequelize.STRING
        },
        release_date:  {
            type:  Sequelize.STRING
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



